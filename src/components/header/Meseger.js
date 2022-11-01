import React, {useState}  from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import MesegerImg from "../../assets/img/Messaanger.png"
import {maxCol} from "../../function/SizeCol";





const Meseger = () => {

    const [open, setOpen ] = useState(false);

    const clickBtnMessege = () => {
        setOpen(!open)
    }

    const data = useStaticQuery(graphql`  
        {
            wp {
                themeGeneralSettings {
                    ACFoptionThemes {
                        messengers { 
                            url
                            icon {
                                localFile {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        }
    `);



    return (
        <MesegerStyle className={`MesegerBtn d-inline-flex align-items-center justify-content-center ${open ? ' active' : '' }`}>
            <div className="container pos">
                <div onClick={clickBtnMessege} className="pulse MesegerBtn d-inline-flex align-items-center justify-content-center">
                    <img className="MesegerImg anim" src={MesegerImg} alt=""/>
                    <div className="MesegerClose anim"></div>
                </div>
                <ul className={`BoxChat ul-clear ${open ? ' active' : ''}`}>
                    { data.wp.themeGeneralSettings.ACFoptionThemes.messengers.map( (item, index) => {
                        return (
                            <li className="chat-img d-flex align-items-center justify-content-center" key={ index + 1 } >
                                <a
                                    className="anim d-flex align-items-center justify-content-center" target="_blank" href={item.url} >
                                    <img
                                        className="anim" src={item.icon.localFile.publicURL}
                                    />
                                </a>
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </MesegerStyle>
    )
}
export default Meseger;

const MesegerStyle = styled.div`
    position: fixed;
    top: 100%;
    left: 0;
    @media (max-width: ${maxCol.md}) {
        left: 2.5rem;
    }
    right:0;
    z-index: 10;
    
    .MesegerImg {
        visibility: visible;
        opacity:1;
    }
    .MesegerBtn {
        position: absolute;
        left: 0;
        top: -8rem;
        cursor: pointer;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background-color: #ffe4d0;
    }
    img {
        width: 4rem;
        height: 4rem;
    }
    .MesegerClose {
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        margin: auto;
        opacity:0;
        visibility: hidden;
        &:before, &:after {
            content:'';
            display: block;
            width: 100%;
            height: 0.5rem;
            background-color: #86644b;
            position: absolute;
            top: 0;
            bottom:0;
            left: 0;
            right: 0;
            margin: auto;
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
        
    }
    &.active {
      .MesegerClose  {
         visibility: visible;
         opacity:1;
      }  
      .MesegerImg {
            visibility: hidden;
            opacity:0;
        }
    }
    
    .pulse::after,
    .pulse::before {
      content: '';
      position: absolute;
      border: 0.2rem solid #ffe4d0;
      left: -1rem;
      opacity: 0;
      right: -1rem;
      top: -1rem;
      bottom: -1rem;
      border-radius: 50%;
      animation: pulse 2.5s linear infinite;
    }

    .pulse::after {
      animation-delay: 1.25s;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      50% { 
        opacity: 1; 
      }
      100% {
        transform: scale(1.2);
        opacity: 0;
      }
    }

    .BoxChat {
        position: absolute;
        left:0;
        top:0;
        .chat-img {
            border-radius: 50%;
            background-color: #ffe4d0;
            
            img {
                width: 3rem;
                height: 3rem;
            }
            transition: all .3s ease;
            //opacity: 0;
            position: absolute;
            left:0;
            right: 0;
            margin: auto;
            width: 6rem;
            height: 6rem;
            //transition-delay: 0s,0s,0s,.13s;
            transform: translateY(0); 
            &:nth-child(1) {
                transition-delay: 0.1s, 0s, 0s, 0.13s;
            }
            &:nth-child(2) {
                transition-delay: 0.2s, 0s, 0s, 0.13s;
            } 
            &:nth-child(3) {
                transition-delay: 0.3s, 0s, 0s, 0.13s;
            }
            &:nth-child(4) {
                transition-delay: 0.4s, 0s, 0s, 0.13s;
            }
            &:nth-child(5) {
                transition-delay: 0.5s, 0s, 0s, 0.13s;
            }
            &:nth-child(6) {
                transition-delay: 0.6s, 0s, 0s, 0.13s;
            }
        }
       
        
        &.active {
            .chat-img {
                opacity: 1;
                
                &:nth-child(1) {
                    transform: translateY(-20rem);  
                    transition-delay: 0.1s, 0s, 0s, 0.6s;
                }  
                &:nth-child(2) {
                    transform: translateY(-30rem); 
                    transition-delay: 0.3s, 0s, 0s, 0.5s;
                }
                &:nth-child(3) {
                    transform: translateY(-40rem); 
                    transition-delay: 0.6s, 0s, 0s, 0.4s;
                }
                &:nth-child(4) {
                    transform: translateY(-50rem); 
                    transition-delay: 0.9s, 0s, 0s, 0.3s;
                }
                &:nth-child(5) {
                    transition-delay: 1.2s, 0s, 0s, 0.2s; 
                }
                &:nth-child(6) {
                    transition-delay: 1.5s, 0s, 0s, 0.1s;
                }
            } 
        }
    }
`;