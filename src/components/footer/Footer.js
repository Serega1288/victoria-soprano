import React from 'react';
//import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";
import FooterMenu1 from './FooterMenu1';
import FooterMenu2 from './FooterMenu2';
import FooterMenu3 from './FooterMenu3';
//import SignupForm from "./SignupForm";

const Footer = () => {

    return (
        <WrapFooter>
         <div className="wrap-footer-1">
             <div className="container">
                 <div className="row">
                     <div className="col-3">
                         <div className="d-flex justify-content-center w100 h100">
                             <div className="box-menu d-inline-block">
                                 <FooterMenu1 />
                             </div>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="d-flex justify-content-center w100 h100">
                             <div className="box-menu d-inline-block">
                                 <FooterMenu2 />
                             </div>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="d-flex justify-content-center w100 h100">
                             <div className="box-menu d-inline-block">
                                 <FooterMenu3 />
                             </div>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="d-flex justify-content-center w100 h100">
                             <div className="box-menu d-inline-block">

                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        <div className="wrap-footer-2">
            <div className="container">
                <div className="row">

                </div>
            </div>
        </div>
    </WrapFooter>
)};

export default Footer;

const WrapFooter = styled.footer`
     .wrap-footer-1 {
        border-top: 1px solid #000000;
        & > .container > .row > div:first-child > .w100 {
            border: none;
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
     }
     .box-menu {
         padding-top: 5rem;
     } 
     .w100 {
        border-left: 1px solid #000;
     }
     ul {
        li { 
            a {
                font-size: 1.8rem;
                font-style: normal;
                letter-spacing: normal;
                line-height: 2.2rem;
                text-decoration: none; 
            }
        }
     }
`;