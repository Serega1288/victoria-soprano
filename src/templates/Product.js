import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";

const Product = (props) => {

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
        <Layout title={ props.pageContext.title } desc={ data.wp.allSettings.generalSettingsTitle } >
            produstss
        </Layout>
    );
};
export default Product;