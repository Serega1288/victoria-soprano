import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import {minCol, maxCol} from "../function/SizeCol";
import styled from "styled-components";
import img404 from '../assets/img/404.png';

const FrontPage = (props) => {

    const data = useStaticQuery(graphql` 
        {
            wp { 
                allSettings {
                    generalSettingsTitle 
                    generalSettingsDescription
                }
            } 
        }
    `)
    return (
        <Layout title="404 Sorry, page not found"  desc={ data.wp.allSettings.generalSettingsTitle } >
            <Page404 className="page-404 d-flex justify-content-center align-items-center flex-column">
                <div className="text d-block d-sm-none">
                    <div>Sorry,</div>
                </div>
                <img src={img404} alt=""/>
                <h1 className="text">
                    <div className="d-none d-sm-block">Sorry,</div>
                    page not found
                </h1>
            </Page404>
        </Layout>
    );
};
export default FrontPage;

const Page404 = styled.section`
    text-align: center;
    height: calc(100vh - 13.4rem);  
    .text {
        color: #000000;
        font-family: 'Bolkit';
        line-height: 1;
        font-size: 6.8rem;
        font-weight: 700;
    }
    @media (max-width: ${maxCol.lg}) {
        img {
            max-width: 80rem;
        }
    }
    @media (max-width: ${maxCol.sm}) { 
        img {
            max-width: 34rem;
        }
        height: calc(100vh - 8.8rem);   
        .text {
            font-size: 6.8rem;
            margin: 5rem 0;
        }
    } 
    
`;