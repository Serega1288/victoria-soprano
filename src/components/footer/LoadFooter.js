import React from 'react';
import {minCol, maxCol} from "../../function/SizeCol";
import styled from "styled-components";
import FooterMenu1 from './FooterMenu1';
import FooterMenu2 from './FooterMenu2';
import FooterMenu3 from './FooterMenu3';
import IconList from "./IconList";



const LoadFooter = () => {

    return (
        <WrapFooter>
            <div className="wrap-footer-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-sm-flex justify-content-sm-center w100 h100">
                                <div className="box-menu d-sm-inline-block">
                                    <FooterMenu1 />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-sm-flex justify-content-sm-center w100 h100">
                                <div className="box-menu d-sm-inline-block">
                                    <FooterMenu2 />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-sm-flex justify-content-sm-center w100 h100">
                                <div className="box-menu d-sm-inline-block">
                                    <FooterMenu3 />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="d-sm-flex justify-content-sm-center w100 h100">
                                <div className="box-menu d-sm-inline-flex flex-sm-column justify-sm-content-between">
                                    <div>
                                        <h3 className="title">
                                            Newsletter
                                        </h3>
                                        <form className="Newsletter">
                                            <label htmlFor="email" className="d-block">
                                                <input placeholder="Email" id="email" type="email"/>
                                            </label>
                                            <label className="radio d-flex align-items-center" htmlFor="term-Newsletter">
                                                <input id="term-Newsletter" type="checkbox" className="d-flex" />
                                                <span className="d-flex">I accept the policy to subscribe to emails</span>
                                            </label>
                                            <button className="btn style-1">subscribe</button>
                                        </form>
                                    </div>

                                    <IconList />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-footer-2">
                <div className="container">
                    <div className="footer-logo-text d-none d-sm-block">
                        Victoria Soprano Group
                    </div>
                    <div className="copyright">
                        2021 © “Victoria Soprano Group” All rights reserved.
                    </div>
                </div>
            </div>
        </WrapFooter>
    )};

export default LoadFooter;

const WrapFooter = styled.footer`
    [aria-current="page"] {
        border-bottom: 1px solid #1a0f07;
    }
    .Newsletter {
        @media (max-width: ${maxCol.sm}) {
            button {
                width: calc(100% + 2.7rem + 2.7rem);
                margin-left: -2.7rem;
                margin-right: -2.7rem;
            }
        }
        input:not([type="radio"]) { 
            background: rgba(0,0,0,0);
            border: none;
            border-bottom: 1px solid #000;
            color: #000;
            font-size: 1.8rem;
            margin: 0;
            outline: none;
            &::placeholder {
              color: #909090;
            }
        }
        input {
            width:100%;
        }
        .radio {
            color: #1a0f07;
            font-size: 1.2rem;
            font-weight: 400;
            input { 
                margin: 0rem;
                appearance: none;
                width: 1.4rem;
                height: 1.4rem;
                border: 2px solid #000000;
                border-radius: 4px;
                background: rgba(0,0,0,0);
                &:checked { 
                   background: #86644b;
                   border: 2px solid #86644b;
                }
            }
            span {
                margin-left:0.8rem;
            }
        }
        label {
            margin-bottom: 1.6rem;
            cursor: pointer;
        }
    }
    .icons {
        @media (max-width: ${maxCol.sm}) {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
        li {
            margin: 0;
            display: inline-block;
            margin-right: 1rem;
            margin-bottom: 1.5rem;
            margin-top: 1.5rem;
            @media (max-width: ${maxCol.sm}) {
                 margin-left: 1rem;
            }
        }
        a {
            width: 40px;
            height: 40px;
            display: flex;
            border-radius: 50%;
            background: rgba(134, 100, 75,0);
            img {
                filter: none;
            }
           &:hover {
                background: rgba(134, 100, 75,1);
                img {
                    filter: brightness(0) invert(1);
                }
           }
        }
    }
    .copyright { 
        font-size: 1.2rem;
        font-weight: 400;
        color: #000000;
        padding-bottom: 2.6rem;
    }
     .footer-logo-text {
        padding-top: 5rem;
        color: #86644b;
        font-family: 'Bolkit';
        font-size: 12.4rem;
        line-height: 1;
        font-weight: 700;
        padding-bottom: 2.5rem;
        @media (max-width: ${maxCol.xxl}) {
            font-size: 12rem;
        }
        @media (max-width: ${maxCol.xl}) {
            font-size: 10rem;
        }
        @media (max-width: ${maxCol.lg}) {
            font-size: 12rem;
        }
        @media (max-width: ${maxCol.md}) {
            font-size: 9rem;
        }
     }
     .wrap-footer-1 {
        border-top: 1px solid #000000 !important;
        border-bottom: 1px solid #000000;
        & > .container > .row > div:first-child > .w100 {
            border: none;
        }
        @media (max-width: ${maxCol.md}) {
            & > .container > .row > div:nth-child(3) > .w100 {
                border: none;
            }
        }
        @media (max-width: ${maxCol.sm}) {
            padding-top: 6rem;
            border: none;
            & > .container > .row > div > .w100 {
                border: none;
            }
        }
     }
     .wrap-footer-2 {
        
     }
     .title {
        color: #1a0f07;
        font-size: 3rem;
        font-weight: 400;
        line-height: 3.6rem;
        margin: 0 0 2.5rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 2.2rem;
            line-height: 2.4rem;
            margin: 0 0 1.5rem;
        }
     }
     .box-menu {
         padding-top: 5rem;
         padding-bottom: 1rem;
         @media (max-width: ${maxCol.sm}) {
            padding-top: 1rem;
            padding-left: 2.7rem;
            padding-right: 2.7rem; 
            ul.box-menu-ul {  
                display: flex; 
                flex-wrap: wrap;
                li {
                    flex: 0 0 auto;
                    width: 50%;
                }
            }
         }
         @media (min-width: ${minCol.sm}) {
            max-width: 23.2rem;
         }
     } 
     .w100 {
        border-left: 1px solid #000;
     }
     ul {
        li {
            margin-bottom: 1.5rem;
            @media (max-width: ${maxCol.sm}) {
                margin-bottom: 1rem;
             }
            a {
                font-size: 1.8rem;
                font-style: normal; 
                letter-spacing: normal;
                line-height: 2.2rem;
                text-decoration: none; 
                @media (max-width: ${maxCol.sm}) {
                    font-size: 1.6rem;
                    line-height: 1.9rem;
                }
            }
        }
     }
`;