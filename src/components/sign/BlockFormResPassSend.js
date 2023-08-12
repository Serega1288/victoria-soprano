import React from "react"
import {Link} from "gatsby"
import userFormResPass from "../../function/useFormResPass"
import {instanceAuthService} from "../../function/auth";

const BlockFormSend = (d, email, type, location) => {
    const { values, captureInput, submitForm, isLoading, error, message} = userFormResPass(d, email, type);

    return (
        <form onSubmit={submitForm}>
            {/*{console.log('ee', email, d)}*/}
            { message?.result !== '1_' && isLoading === false ? (
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
                        {instanceAuthService.isLogined() ? (
                            <div className="Boxlink text-center">
                                <span>Return to the&nbsp;</span>
                                {
                                    location ? (
                                        <Link className="link-form" to={`/account/${location[0] === '?r' ? ( `?r=` + location[1]) : '' }`}>Account</Link>
                                    ) : (
                                        <Link className="link-form" to={`/account/`}>Account</Link>
                                    )
                                }
                            </div>
                        ) : (
                            <div className="Boxlink text-center">
                                <span>Already have an account?&nbsp;</span>
                                {
                                    location ? (
                                        <Link className="link-form" to={`/sign-in/${location[0] === '?r' ? ( `?r=` + location[1]) : '' }`}>Sign In</Link>
                                    ) : (
                                        <Link className="link-form" to={`/sign-in/`}>Sign In</Link>
                                    )
                                }
                            </div>
                            )
                        }

                    </label>
                    <button disabled={isLoading} type="submit" className="style-3 btn w100">
                        { isLoading ? 'Reset password...' :  'Reset password' }
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