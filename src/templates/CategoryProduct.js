import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";

const CategoryProduct = (props) => {

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
            <Const props={list} />
        </Layout>
    );
};
export default CategoryProduct;