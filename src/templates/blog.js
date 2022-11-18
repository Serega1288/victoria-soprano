import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";

const FrontPage = (props) => {
    ///console.log('dsds', props.location.href)
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
    const list = props.pageContext.ACFconstructor.const;
    return (
        <Layout title={ props.pageContext.title } desc={ data.wp.allSettings.generalSettingsTitle } >
            <Const href={props.location.href} props={list} />
        </Layout>
    );
};
export default FrontPage;