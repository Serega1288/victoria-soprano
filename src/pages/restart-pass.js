import React, {useState} from 'react'
import {AuthLayout} from "../function/AuthLayout"
import Layout from "../components/Layout"
import useFormCode from "../function/userFormCode"
import BlockFormResPassSend from "../components/sign/BlockFormResPassSend"
import {Link} from "gatsby"
import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";
import Title from "../components/constructor/Title";
import {instanceAuthService} from "../function/auth";

const ResetPass = (props) => {



    // const isBrowser = typeof window !== "undefined"

    const maxTime = 20;
    const t = 'rest-pass';
    // const [d, setD] = useState( new Date() );
    const [d] = useState( new Date() );
    const [timeSend, setTimeSend] = useState(0);
    const { values, captureInput, submitForm, isLoading, error, message, setMessage} = useFormCode(d, t);

    const SendCode = () => {
        setTimeSend(1)
        setMessage(null)
        setTimeout(function(){
            setTimeSend(0)
        }, maxTime * 1000);
    }
    const location = props.location.search?.split('=');

    // console.log('location >> 1', location )

    return (
        <AuthLayout logIn={'none'} page='reset-pass' go='account'>
            <Layout title="Reset password" desc="desc">
                <section>
                    <div className="Login container">
                        <div className="box">

                            <BoxForm className="sectionHeight">
                                <Title item={{title: "Reset password"}} />
                                {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}
                                {
                                    message?.result === '1_' && isLoading === false ?
                                        <>
                                            <div className="text-center">
                                                <span className=" link-form sendcode anim text-center"
                                                      style={{display: 'inline-block'}} onClick={() => SendCode()}> &lt; Resend the code</span>
                                            </div>
                                            <BlockFormResPassSend
                                                props={props}
                                                location={location}
                                                d={d} email={values.email}
                                                type={t}
                                            />
                                        </>
                                        :
                                        <>
                                            <form onSubmit={submitForm}>

                                                <input type="garbage"
                                                       name="garbage"
                                                       disabled={isLoading}
                                                       value={values.garbage}
                                                       onChange={captureInput}
                                                    // isLoading={isLoading}
                                                       className="garbage"
                                                />
                                                <label>
                                                    <input type="email"
                                                           required="required"
                                                           name="email"
                                                           disabled={isLoading}
                                                           value={values.email}
                                                           onChange={captureInput}
                                                        // isLoading={isLoading}
                                                           placeholder="Your email address"
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
                                                            <span>Already have an account?</span>
                                                            {
                                                                location?.length > 1 ? (
                                                                    <Link
                                                                        className='link-form'
                                                                        to={`/sign-in/${location[0] === '?r' ? (`?r=` + location[1]) : ''}`}>
                                                                        &nbsp;Sign In
                                                                    </Link>
                                                                ) : (
                                                                    <Link
                                                                        className='link-form'
                                                                        to={`/sign-in/`}>
                                                                        &nbsp;Sign In
                                                                    </Link>
                                                                )
                                                            }
                                                        </div>
                                                    ) }




                                                </label>


                                                {
                                                    timeSend === 0 ?
                                                        <button disabled={isLoading} type="submit"
                                                                className="style-3 btn w100">
                                                            {isLoading ? 'Wait send email...' : 'Send Code'}
                                                        </button>
                                                        :
                                                        <span disabled={isLoading} className="style-3 btn w100">
                                                        Resending the code in {maxTime} seconds...
                                                    </span>
                                                }


                                                {
                                                    isLoading === false ? (
                                                        <h3 className={` statusInfo text-center 
                                                        ${error || message ? ' active ' : ''}
                                                        ${error ? ' error ' : ''}
                                                        ${
                                                            message?.result === '01' ||
                                                            message?.result === '02' ||
                                                            message?.result === '03' ||
                                                            message?.result?.status === 400 ||
                                                            message?.result === '04' ? 'error' : 'done'
                                                        }
                                                        `}>
                                                            {error ? error : ''}
                                                            {message ? message?.message : ''}
                                                        </h3>
                                                    ) : ('')
                                                }
                                            </form>
                                        </>
                                }
                            </BoxForm>
                        </div>
                    </div>
                </section>
            </Layout>
        </AuthLayout>
    )
}
export default ResetPass;

const BoxForm = styled.div`
    overflow: hidden;
    &.sectionHeight {
        min-height: calc(100vh - 13.4rem);
        @media(max-width:${maxCol.sm}) { 
            min-height: calc(100vh - 8.8rem);
        }
    }
     max-width: 75rem;
     margin: auto;
     
     .statusInfo {
        margin: 4rem auto;
        max-width: 60rem;
        display: none;
        padding: 2rem ;
        color: #fff;
        &.error {
            background: #ffe4d0;
            color: #1a0f07;
        }
        &.done {
            background: #1a0f07;
        }
        &.active {
            display: block;
        }
     }
     
     button {
        min-height: 6rem;
        width: 100%;
        display: block;
        max-width: calc(100% - 5rem*2);
        margin-left: auto;
        margin-right: auto;
        @media(max-width:${maxCol.sm}) { 
            min-height: 5rem;
            max-width: 100%; 
        }
     }
     .link-form {
       cursor: pointer;
        color: #000000;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: inline-block;
        text-decoration: none;
        position: relative;
        &:after {
            content: '';
            width: 100%;
            height: 1px;
            background: #000;
            margin-top: 1px;
            display: block;
        }
        &:hover {
            color: #86644B;
            &:after {
                background: #86644B;
            }
        }
     }
     .title { 
        @media(min-width:${minCol.sm}) { 
            margin-bottom: 5rem !important; 
        }
     }
     label {
        width: 100%;
        display: block;
        margin-bottom: 5rem;
        @media(max-width:${maxCol.sm}) { 
            margin-bottom: 2.5rem;
        }
     } 
     input {
        width: 100%;
        display: block;
        height: 8rem;
        border: 1px solid #000000;
        padding: 0 2.5rem;
        font-size: 3rem;
        @media(max-width:${maxCol.sm}) { 
            height: 5rem;
            font-size: 1.8rem;
        }
        &.error {
            border-color: #A12A2E; 
        }
        &::placeholder {
            color: #C4C4C4;
            font-weight: 400;
        }
     }
`

