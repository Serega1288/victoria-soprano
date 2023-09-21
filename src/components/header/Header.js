import React, {useState, useEffect} from 'react';
import {maxCol} from "../../function/SizeCol";

import styled from 'styled-components';
import {Link} from 'gatsby';
import ImgLogo from '../../assets/img/logo.png';
import ImgBag from '../../assets/img/bag.svg';
import ImgSearch from '../../assets/img/search.png';
import ImgUser from '../../assets/img/user.png';
import WrapMenu from './WrapMenu';
// import Meseger from '../header/Meseger'
import {instanceAuthService} from "../../function/auth";
import {localStoreService} from "../../function/hook";

const Header = ( props ) => {


    const [ first, firstOpen ] = useState(false);
    const [open, setOpen ] = useState(false);

    const clickHandler = () => {

        setOpen(!open)
        if (first === false) {
            firstOpen(!first)
        }

        if (open === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (open === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    };


    const [ stepCartNumber, stepCartNumberSet ] = useState(0);
    useEffect(()=>{
        let stepCart = 0;
        if ( localStoreService.getLocal('CartBuy') ) {

            localStoreService.getLocal('CartBuy').map((item, index) => (
                stepCart = stepCart + item.step
            ) )
        }
        // console.log('instanceAuthService', stepCart, localStoreService.getLocal('CartBuy') );
        stepCartNumberSet(stepCart);

    },[])

    return (
        <>
            <WrapHeader className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <IconItems className="ul-clear align-items-center d-flex d-md-none">
                                <li className="">
                                    <Link to="/search/">
                                        <img src={ImgSearch} className="search" alt="search" />
                                    </Link>
                                </li>
                            </IconItems>
                        </div>
                        <div className="col-auto">
                            <Link  to="/">
                                <img className="d-block logo" src={ImgLogo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <IconItems className="ul-clear d-flex align-items-center ">

                                { instanceAuthService.isLogined() &&
                                    <li className="d-none d-md-block">
                                        <Link className='wrapBag' to="/cart/">
                                            <span id='BagCount'>
                                                { stepCartNumber }
                                            </span>
                                            <img src={ImgBag} className="cart" alt="cart" />
                                        </Link>
                                    </li>
                                }

                                <li className="d-none d-md-block">
                                    <Link to="/search/">
                                        <img src={ImgSearch} className="search" alt="search" />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/account/">
                                        <img src={ImgUser} className="user" alt="user" />
                                    </Link>
                                </li>
                            </IconItems>

                            <div className='menu-wrapper jsMenuOpen' onClick={clickHandler}>
                                <span className={'hamburger-menu jsMenuOpen' + (open ? ' open animate' : '')} ></span>
                            </div>

                        </div>
                    </div>
                </div>
            </WrapHeader>

            <WrapMenu open={open} first={first} />


            {/*<Meseger />*/}

        </>
    )
};

export default Header;


const bar_width = 3;
const bar_height = 0.2;
const bar_spacing = 0.7;
const m = 0.7;

 const WrapHeader = styled.header`
     border: 1px solid #000000;
     padding-top: 1rem;
     padding-bottom: 1rem; 
     min-height: 13.4rem;
     @media (max-width:${maxCol.sm}) {
         min-height: 8.8rem;    
     }
     position: fixed;
     top:0;
     left:0;
     right: 0;
     z-index:100;
     background-color: #f7f4ed;
   
    .wrapBag {
      position: relative;
      span {
        //background-color: #86644b;
        //border-radius: 50%;
        color: #86644b;
        //width: 1.2rem;
        //height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 0;
        position: absolute;
        top: 0.5rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
      }
    }
     .cart {
       height: 2.8rem;
     }
     .logo {
        height: 11.2rem;
        @media (max-width:${maxCol.sm}) {
            height: 5.6rem;    
        }
     }
     .user {
        height: 2.2rem;
        width: auto;
        @media (max-width:${maxCol.sm}) {
            height: 1.6rem;    
        }
     } 
     .search {
        height: 2.6rem;
        width: auto;
        @media (max-width:${maxCol.sm}) {
            height: 1.8rem;    
        }
     }
     
    .menu-wrapper {
        margin-left: 2.8rem;
        @media(max-width:${maxCol.sm}) {
            margin-left: 2rem;
        }
        width: ${bar_width}rem;
        height: ${bar_height + bar_spacing * 2 }rem;
        @media (max-width:${maxCol.sm}) {
            width: ${bar_width*m}rem;
            height: ${ (bar_height + bar_spacing * 2 )*m }rem;  
        }
        cursor: pointer;
    }
    
    .hamburger-menu,
    .hamburger-menu:after,
    .hamburger-menu:before {
        width: ${bar_width}rem;
        height: ${bar_height}rem;
        @media (max-width:${maxCol.sm}) {
            width: ${bar_width*m}rem;
            height: ${bar_height*m}rem;  
        }
        border-radius: 0.8rem
    }
    
    .hamburger-menu {
        display:block;
        position: relative;
        transform: translateY(${bar_spacing}rem);
        @media (max-width:${maxCol.sm}) {
            transform: translateY(${bar_spacing*m}rem);
        }
        background: rgba(0, 0, 0, 1);
        transition: all 0ms 300ms;
      
      &.animate {
        background: rgba(0, 0, 0, 0); 
      }
    }
    
    .hamburger-menu:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: ${bar_spacing}rem;
        @media (max-width:${maxCol.sm}) {
            bottom: ${bar_spacing*m}rem;
        }
        background: rgba(0, 0, 0, 1);
        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .hamburger-menu:after {
        content: "";
        position: absolute;
        left: 0;
        top: ${bar_spacing}rem;
        @media (max-width:${maxCol.sm}) {
            top: ${bar_spacing*m}rem;
        }
        background: rgba(0, 0, 0, 1);
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .hamburger-menu.animate:after {
        top: 0;
        transform: rotate(45deg);
        transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
    }
     
    .hamburger-menu.animate:before {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
    } 
 
`;


const IconItems = styled.ul`
     li {
        //display:block;
        margin-left: 2rem;
        @media(max-width:${maxCol.sm}) { 
           margin-left: 1.4rem;
        }
        img { 
            display:block;
        }
     }
`;
