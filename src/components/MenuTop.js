import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from 'styled-components';

const MenuTop = () => {
    const data = useStaticQuery(graphql`  
      query($menu : WpMenuLocationEnum = HEADER_TOP ) {
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
            }
        }    
      }
    `);
    return (
        <>
            <div className="container h100">
                <WrapBoxMenuTop className="row h100">
                    <div className="col-7">

                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <div className="wrap">
                            <ul className="menu ul-clear">
                                {data.allWpMenuItem.nodes.map(item => (

                                    <li key={item.id} className={ item.childItems.nodes && item.childItems.nodes.length > 0 ? 'parents' : '' }>
                                        <Link to={item.path} >{item.label}</Link>
                                        { item.childItems.nodes && item.childItems.nodes.length > 0 ? (
                                            <ul className="submenu ul-clear">
                                                {item.childItems.nodes.map(li => (
                                                    <li key={li.id}>
                                                        <Link to={li.path} >{li.label}</Link>
                                                    </li>
                                                ) )}
                                            </ul>
                                        ) : null }
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </WrapBoxMenuTop>
            </div>
        </>
    );
}
export default MenuTop;


const WrapBoxMenuTop = styled.div`
      .menu {  
        text-align: center;
        li {
            margin-top: 40px;
            margin-bottom: 40px;
        }
        .active {
            a:before {
                border-bottom: 1px solid #1a0f07;
            }
        }
        a {
           font-size: 68px;
           line-height: 69px;
           font-weight: 700; 
           text-decoration: none;
           padding: 0 20px;
           color: #1a0f07;
        }
        .parents {
            
        }
      } 
      .submenu {
        top: 0;
        bottom: 0;
        left:0;
        right:0;
        z-index: 1;
        position: absolute;
        opacity: 0;
        visibility: hidden;
      }
`;

