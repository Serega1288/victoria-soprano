import React from "react"
import {Link} from "gatsby"
import useFormReg from "../../function/useFormReg"

const BlockFormSend = ({url,  d, email, type}) => {

    const { values, captureInput, submitForm, isLoading, error, message} = useFormReg(d, email, type);

    // console.log('location 11', d, email, type, url)
    return (
        <form onSubmit={submitForm}>
            { message?.result !== '1_' ? (
            <>
                <input type="garbage"
                       name="garbage"
                       disabled={isLoading}
                       value={values.garbage}
                       onChange={captureInput}
                       // isLoading={isLoading}
                       className="garbage"
                />
                <label>
                    <input type="text"
                           required="required"
                           name="code"
                           disabled={isLoading}
                           value={values.code}
                           onChange={captureInput}
                           // isLoading={isLoading}
                           placeholder="Your code"
                        //className={ message?.result === '03' ? ' error' : '' }
                    />
                    <div className="Boxlink text-center">
                        <span>Already have an account? &nbsp;</span>
                        {
                            url?.length > 1 ? (
                                <Link className="link-form"
                                    to={`/sign-in/${url[0] === '?r' ? (`?r=` + url[1]) : ''}`}>
                                    Sign In
                                </Link>
                            ) : (
                                <Link className="link-form"
                                    to={`/sign-in/`}>
                                    Sign In
                                </Link>
                            )
                        }
                    </div>
                </label>
                <button disabled={isLoading} type="submit" className="style-3 btn w100">
                    { isLoading ? 'Sign In...' :  'Sign In' }
                </button>
            </>
            ) : ''}

            {
                isLoading === false ? (
                    <h3 className={` statusInfo text-center 
                    ${error || message ?  ' active '  : ''}
                    ${error ?  ' error '  : ''}
                    ${
                                message?.result === '01' ||
                                message?.result === '02' ||
                                message?.result === '03_1' ||
                                message?.result === '03_2' ||
                                message?.result?.status === 400 ||
                                message?.result === '04' ?  'error'  : 'done'
                            } 
                    `}>
                        {error ?  error  : ''}
                        {message ? message?.message  : ''}
                    </h3>
                ) : ('')
            }

        </form>
    )
}
export default BlockFormSend;