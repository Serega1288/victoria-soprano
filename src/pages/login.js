import React, {useEffect} from 'react';
import Layout from '../components/Layout';
import useForm from "../function/useFormLogin";
import styled from 'styled-components';
import Title from '../components/constructor/Title'
import {minCol, maxCol} from "../function/SizeCol";
import {Link, navigate} from "gatsby";



const LoginPage = () => {


    const { values, captureInput, submitForm, isLoading, error, message } = useForm();

    // useEffect(()=>{
    //     //message?.result[0] + message?.result[1] ? handleLogin() : ''
    //     console.log('instanceAuthService', message?.result[0], instanceAuthService.isLogined );
    // },[])

    return (
        <Layout title="Login" desc="desc">
            <div className="Login container">

                    <BoxForm className="sectionHeight">
                        <Title item={{title: "Sign in"}} />
                        <form onSubmit={submitForm}>

                                <input type="garbage"
                                       name="garbage"
                                       disabled={isLoading}
                                       value={values.garbage}
                                       onChange={captureInput}
                                       isLoading={isLoading}
                                       className="garbage"
                                />

                            <label>
                                <input type="email"
                                       required="required"
                                       name="email"
                                       disabled={isLoading}
                                       value={values.email}
                                       onChange={captureInput}
                                       isLoading={isLoading}
                                       placeholder="Email"
                                       //className={ message?.result === '03' ? ' error' : '' }
                                />
                            </label>
                            <label>
                                <input type="password"
                                       required="required"
                                       name="password"
                                       disabled={isLoading}
                                       value={values.password}
                                       onChange={captureInput}
                                       isLoading={isLoading}
                                       placeholder="Password"
                                       //className={ message?.result === '04' ? ' error' : '' }
                                />
                                <span className="row">
                                    <span className="col">
                                         <Link className="link-form" to="/register/">Register</Link>
                                    </span>
                                    <span className="col-auto">
                                        <Link className="link-form" to="/restart-pass/">Forgot your password ?</Link>
                                    </span>
                                </span>

                            </label>
                            <button disabled={isLoading} type="submit" className="style-3 btn">
                                { isLoading ? 'Log into account...' :  'Log into account'  }
                            </button>
                        </form>

                        <h3 className={`
                        statusInfo text-center ${error || message ?  ' active '  : ''} 
                        ${message?.result === '01' || message?.result === '02' || message?.result === '03' || message?.result === '04' ?  'error'  : 'done'} `}>
                            {error ?  error  : ''}
                            {message ? message?.message  : ''}
                        </h3>
                    </BoxForm>


            </div>
        </Layout>
    );
};
export default LoginPage;


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
