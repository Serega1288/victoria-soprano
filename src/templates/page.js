import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";

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

    const list = props.pageContext.ACFconstructor.const;
    const title = props.pageContext.title;
    const generalTitle = data.wp.allSettings.generalSettingsTitle;
    const generalDescription = data.wp.allSettings.generalSettingsDescription;


    //console.log('dsds >>>', data.wp.allSettings)

    return (
        <>

            <Layout title={ title === 'home' ? title : generalTitle } desc={ title === 'home' ? generalTitle : generalDescription } >
                <Const href={props.location.href} props={list} />
            </Layout>

        </>
    );
};
export default FrontPage;