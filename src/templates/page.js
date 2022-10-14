import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
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
    `);

    console.log('>>>', data.wp.allSettings.generalSettingsTitle );
    return (
        <Layout title={ props.pageContext.title } desc={ data.wp.allSettings.generalSettingsTitle } >
            { props.pageContext.title }
        </Layout>
    );
};
export default FrontPage;