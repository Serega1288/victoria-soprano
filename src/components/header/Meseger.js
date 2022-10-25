import React, {useState}  from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import MesegerImg from "../../assets/img/Messaanger.png"





const Meseger = () => {

    const [open, setOpen ] = useState(false);

    const clickBtnMessege = () => {
        setOpen(!open)
    }

    const data = useStaticQuery(graphql` 
        {
            wp {  
                allSettings { 
                    generalSettingsTitle 
                    generalSettingsDescription
                }
            } 
        } 
    `);

    const BoxChat = styled.div`
        .viber {
            transition-delay: 0.1s, 0s, 0s, 0.13s;
        } 
        
        .chat-img {
            transition: all .3s ease;
            opacity: 0;
            width: 50px;
            height: 50px;
        }
        
        &.active {
            .chat-img {
                opacity: 1;
            }
            .viber {
              transform: translateY(-220px);
              transition-delay: 0.3s, 0s, 0s, 0.4s;
            }
        }
    `;

    return (
        <MesegerStyle className={`MesegerBtn d-inline-flex align-items-center justify-content-center ${open ? ' active' : '' }`}>
            <div className="container">
                <div onClick={clickBtnMessege} className="pulse MesegerBtn d-inline-flex align-items-center justify-content-center">
                    <img className="MesegerImg anim" src={MesegerImg} alt=""/>
                    <div className="MesegerClose anim"></div>
                </div>
            </div>
            <BoxChat className={open ? ' active' : '' }>

            </BoxChat>
        </MesegerStyle>
    )
}
export default Meseger;

const MesegerStyle = styled.div`

    position: fixed;
    bottom: -14rem;
    left: 0;
    right:0;
    z-index: 10;
    .MesegerImg {
        visibility: visible;
        opacity:1;
    }
    .MesegerBtn {
        position: relative;
        margin-bottom: calc(14rem + 2.5rem);
        cursor: pointer;
        width: 12.7rem;
        height: 12.7rem;
        border-radius: 50%;
        background-color: #ffe4d0;
    }
    img {
        width: 8rem;
        height: 8rem;
    }
    .MesegerClose {
        width: 8rem;
        height: 8rem;
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
            height: 6px;
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
`;