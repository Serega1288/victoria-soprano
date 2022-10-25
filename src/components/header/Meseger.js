import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import MesegerImg from "../../assets/img/Messaanger.png"


const Meseger = () => {

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

    return (
        <MesegerStyle>
            <div className="container">
                <div className="MesegerImg d-inline-flex align-items-center justify-content-center">
                    <img src={MesegerImg} alt=""/>
                </div>
            </div>
        </MesegerStyle>
    )
}
export default Meseger;

const MesegerStyle = styled.div`
    position: fixed;
    bottom: -14rem;
    left: 0;
    right:0;
    z-index: 100;
    .MesegerImg {
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
`;