import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import ImgLogo from '../../assets/img/logo.png';
import ImgSearch from '../../assets/img/search.png';
import ImgUser from '../../assets/img/user.png';
import WrapMenu from './WrapMenu';

const {useState} = React;

const Header = ( props ) => {


    const [ first, firstOpen ] = useState(false);
    const [open, setOpen ] = useState(false);

    const clickHandler = () => {

        setOpen(!open)
        if (first === false) {
            firstOpen(!first)
        }
    };

    return (
        <>
            <WrapHeader className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col-auto">
                            <Link  to="/">
                                <img className="d-block logo" src={ImgLogo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <IconItems className="ul-clear d-flex align-items-center ">
                                <li>
                                    <Link to="/search/">
                                        <img src={ImgSearch} className="search" alt="search" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user/">
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
     @media (max-width:575px) {
         min-height: 8.8rem;    
     }
     position: fixed;
     top:0;
     left:0;
     right: 0;
     z-index:100;
     background-color: #f7f4ed;
     
     
     .logo {
        height: 11.2rem;
        @media (max-width:575px) {
            height: 5.6rem;    
        }
     }
     .user {
        height: 2.2rem;
        width: auto;
        @media (max-width:575px) {
            height: 1.6rem;    
        }
     }
     .search {
        height: 2.6rem;
        width: auto;
        @media (max-width:575px) {
            height: 1.8rem;    
        }
     }
     
    .menu-wrapper {
        margin-left: 2.8rem;
        @media(max-width:576px) {
            margin-left: 2rem;
        }
        width: ${bar_width}rem;
        height: ${bar_height + bar_spacing * 2 }rem;
        @media (max-width:575px) {
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
        @media (max-width:575px) {
            width: ${bar_width*m}rem;
            height: ${bar_height*m}rem;  
        }
        border-radius: 0.8rem
    }
    
    .hamburger-menu {
        display:block;
        position: relative;
        transform: translateY(${bar_spacing}rem);
        @media (max-width:575px) {
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
        @media (max-width:575px) {
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
        @media (max-width:575px) {
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
        display:block;
        margin-left: 2rem;
        @media(max-width:576px) { 
           margin-left: 1.4rem;
        }
        img { 
            display:block;
        }
     }
`;

//
// const Wrapper = styled.div`
//     padding:  20px;
//     h1 {
//         font-size: 28px;
//         font-family: 'Balsamiq Sans', cursive;
//         font-weight: 700;
//         margin: 0;
//         display: flex;
//         align-item: center;
//     }
//     a {
//     color: ${props => props.theme.black};
//     text-decoration: none;
//         svg {
//             fill: ${props => props.theme.yellow}
//             width; 40px;
//             height: 40px;
//             margin-right: 10px;
//         }
//     }
// `;
