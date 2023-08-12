import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";
import {instanceAuthService} from "../function/auth";
// import {minCol, maxCol} from "../function/SizeCol";
// import dataAccount from "../function/dataAccount";

const LayoutAccount = ({children}) => {



    const LogoutUser = () => {
        instanceAuthService.logout()
    }
    return (


                <AccountWrap id='AccountScroll-0' className="account container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <AccountMenu>
                                <ul>
                                    <li>
                                        <Link className='a' to='/account/'>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="bi:person">
                                                    <g id="Group">
                                                        <path id="Vector" d="M16 16C17.5913 16 19.1174 15.3679 20.2426 14.2426C21.3679 13.1174 22 11.5913 22 10C22 8.4087 21.3679 6.88258 20.2426 5.75736C19.1174 4.63214 17.5913 4 16 4C14.4087 4 12.8826 4.63214 11.7574 5.75736C10.6321 6.88258 10 8.4087 10 10C10 11.5913 10.6321 13.1174 11.7574 14.2426C12.8826 15.3679 14.4087 16 16 16ZM20 10C20 11.0609 19.5786 12.0783 18.8284 12.8284C18.0783 13.5786 17.0609 14 16 14C14.9391 14 13.9217 13.5786 13.1716 12.8284C12.4214 12.0783 12 11.0609 12 10C12 8.93913 12.4214 7.92172 13.1716 7.17157C13.9217 6.42143 14.9391 6 16 6C17.0609 6 18.0783 6.42143 18.8284 7.17157C19.5786 7.92172 20 8.93913 20 10ZM28 26C28 28 26 28 26 28H6C6 28 4 28 4 26C4 24 6 18 16 18C26 18 28 24 28 26ZM26 25.992C25.998 25.5 25.692 24.02 24.336 22.664C23.032 21.36 20.578 20 16 20C11.42 20 8.968 21.36 7.664 22.664C6.308 24.02 6.004 25.5 6 25.992H26Z" fill="#000"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            My account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='a' to='/account/order'>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="la:shopping-bag">
                                                    <path id="Vector" d="M16.0005 3C13.2545 3 11.0005 5.254 11.0005 8V9H6.0625L6.0005 9.938L5.0005 27.938L4.9375 29H27.0625L27.0005 27.937L26.0005 9.937L25.9375 9H21.0005V8C21.0005 5.254 18.7465 3 16.0005 3ZM16.0005 5C16.7962 5 17.5592 5.31607 18.1218 5.87868C18.6844 6.44129 19.0005 7.20435 19.0005 8V9H13.0005V8C13.0005 7.20435 13.3166 6.44129 13.8792 5.87868C14.4418 5.31607 15.2049 5 16.0005 5ZM7.9375 11H11.0005V14H13.0005V11H19.0005V14H21.0005V11H24.0635L24.9385 27H7.0635L7.9375 11Z" fill="black"/>
                                                </g>
                                            </svg>
                                            My odrer
                                        </Link>
                                    </li>
                                    <li className="LogoutUser">
                                <span className='a' onClick={()=>LogoutUser()}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ci:exit">
                                            <g id="Group">
                                                <path id="Vector" d="M25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20H6.66667V25.3333H25.3333V6.66667H6.66667V12H4V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28ZM14.6667 21.3333V17.3333H4V14.6667H14.6667V10.6667L21.3333 16L14.6667 21.3333Z" fill="black"/>
                                            </g>
                                        </g>
                                    </svg>
                                    EXIT
                                </span>
                                    </li>
                                </ul>
                            </AccountMenu>
                        </div>
                        <div className="col-12 col-md-7">
                            {children}
                        </div>
                    </div>

                </AccountWrap>


    )
}
export default LayoutAccount;

const AccountWrap = styled.div`
    padding-top: 6rem;
    padding-bottom: 10rem;
`;
const AccountMenu = styled.div`
    .LogoutUser {
      cursor: pointer; 
      max-width: 23rem;
    } 
    ul {
      margin: 0;
      padding: 0;
    }
    li::marker {
      font-size: 0;
    }
    li {
      padding-top: 1rem;
      padding-bottom: 1rem; 
    }
    svg {
      margin-right: 2.5rem;
    }
    .a {
      text-decoration: none;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 1;
    }
    .LogoutUser {
      border-top: 1px solid #000000;
    }
   [aria-current="page"] {
       color: #86644B;
       path {
        fill: #86644B;
      } 
   }
  
`;