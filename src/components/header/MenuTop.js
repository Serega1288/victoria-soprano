import React, {useState} from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from 'styled-components';
//import BackgroundImage from 'gatsby-background-image';
//import { StaticImage } from "gatsby-plugin-images"



const MenuTop = () => {
    const data = useStaticQuery(graphql`  
      query($menu : WpMenuLocationEnum = HEADER_TOP ) {
        
        allWpMenu(filter: {locations: {eq: $menu} }) {
            nodes {
                 ACFmenuImage {
                    foto {
                      localFile {
                        publicURL  
                      }
                    }
                  }
            }
        }
      
        allWpMenuItem(filter: { locations: { eq: $menu }, parentId: {eq: null} }) {
            nodes {
              id
              label
              path
              childItems {
                nodes {
                  id
                  label
                  path 
                } 
              }
              ACFmenuImage {
                foto {
                  localFile {
                    publicURL  
                  }
                }
              }
            }
        }    
      }
    `);

    const { allWpMenu, allWpMenuItem } = data;

    const [open, setOpen ] = useState(false);
    const clickSubmenu = () => {
        setOpen(!open)
    };

    return (
        <>
            <WrapBoxMenuImage>
                <div
                    className="background"
                    style={{ backgroundImage: `url(${ allWpMenu.nodes[0].ACFmenuImage.foto.localFile.publicURL })` }}
                />
            </WrapBoxMenuImage>
            <WrapBoxMenuTop className="container h100">
                <div className="row h100 box-menu-top">
                    <div className="col-12 col-sm-6 col-xl-7">

                    </div>
                    <div className="col-12 col-sm-6 col-xl-5 d-flex align-items-center justify-content-center pos">
                        <div className="wrap">
                            <ul className="menu ul-clear">
                                {allWpMenuItem.nodes.map(item => (
                                    <li key={item.id} className={ item.childItems.nodes && item.childItems.nodes.length > 0 ? 'parents' : '' } >
                                        <Link to={item.path} >{item.label}</Link>
                                        { item.childItems.nodes && item.childItems.nodes.length > 0 ? (
                                            <>
                                                <span onClick={clickSubmenu} className="sub-menu-next"></span>
                                                <div className={'anim box-submenu d-flex align-items-center justify-content-center flex-column' + (open ? ' open' : '')}>
                                                    <span onClick={clickSubmenu} className="sub-menu-prev sub-menu-next"> </span>
                                                    <ul className="submenu ul-clear">
                                                        {item.childItems.nodes.map(li => (
                                                            <li key={li.id}>
                                                                <Link  to={li.path}>{li.label}</Link>
                                                            </li>
                                                        ) )}
                                                    </ul>
                                                </div>
                                            </>
                                        ) : null }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </WrapBoxMenuTop>
        </>
    );
}
export default MenuTop;



const WrapBoxMenuImage = styled.div` 
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 47%;
    @media (max-width: 1399px) {
        right: 50%;    
    }
    z-index: 2;
    .background {
        filter: grayscale(100%);
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        z-index: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; 
        transition: all 0.5s ease;
        &:hover {
            filter:none;
        }
    }
    @media (max-width: 565px) {
        top: 50%;
        right: 0;
        z-index: 0;
        .background {
            background-position: top center; 
        }
    }
`;

const WrapBoxMenuTop = styled.div`
        background-color: #f7f4ed;
        position: relative;
        z-index: 1;
        @media (max-width: 565px) {
                height: auto !important;
        }
        .box-menu-top {
           @media (max-width: 565px) {
                height: auto;
           }
        }
      .col-left {
        position: relative;
      }
      .menu {  
        @media (max-width: 565px) { 
           margin-top: 4rem;
           margin-bottom: 3rem;
        }
        text-align: center;
        li {
            margin-top: 4rem;
            margin-bottom: 4rem;
            @media (max-width: 565px) { 
                margin-top: 1.6rem;
                margin-bottom: 1.6rem;
           }
        }
        [aria-current="page"] {
            border-bottom: 1px solid #1a0f07;
        }
        a {
           font-size: 6.8rem;
           line-height: 6.9rem;
           padding: 0 2rem;
           @media (max-width: 565px) { 
                font-size: 3rem;
                line-height: 3.6rem; 
           }
           font-weight: 700; 
           text-decoration: none;
           
           color: #1a0f07;
        }
        .parents {
            padding-left: 6rem;
            @media(max-wdth: 565px) {
                padding-left: 4.8rem;
            }
            padding-right: 3rem;
        }
      } 
      .sub-menu-next {
        margin: 0 0 0 0rem;
        display: inline-block;
        position: relative;
        width: 3rem;
        height: 3rem;
        @media (max-width: 565px) { 
            width: 1.8rem;
            height: 1.8rem;
        }
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        &:before {
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            height: 100%;
            border-right: 2px solid #000;
            border-bottom: 2px solid #000;
            @media (max-width: 565px) { 
                border-right: 1.5px solid #000;
                border-bottom: 1.5px solid #000;
            }
            transform: rotate(-45deg);
            cursor: pointer;
        }
      }
      .sub-menu-prev {
        transform: rotate(180deg);
      }
      .box-submenu {
        background-color: #f7f4ed;
        top: 0;
        bottom: 0;
        left:0;
        right:0;
        z-index: 2;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        &.open {
           opacity: 1;
            visibility: visible; 
        }
        .submenu {
            
        }
      }
`;
