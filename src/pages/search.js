import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import {maxCol} from "../function/SizeCol";
import styled from "styled-components";

const SearchPage = () => {

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
        <Layout title="Seacrh"  desc={ data.wp.allSettings.generalSettingsTitle } >
            <Search className="page-404 d-flex justify-content-center align-items-center flex-column">
                <h1>SearchPage</h1>
            </Search>
        </Layout>
    );
};
export default SearchPage;

const Search = styled.section`
    text-align: center;
    height: calc(100vh - 13.4rem); 
    @media (max-width: ${maxCol.lg}) {
         
    }
    @media (max-width: ${maxCol.sm}) { 
        height: calc(100vh - 8.8rem);   
    } 
    
`;