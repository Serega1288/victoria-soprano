import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";

import Categories from "../components/CategoryProduct/Categories";
import Products from "../components/CategoryProduct/Products";


const CategoryProduct = (props) => {
    //console.log('category >>', props );
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

    //const list = props.pageContext.ACFconstructor.const;
    return (
        <Layout title={ props.pageContext.name } desc={ data.wp.allSettings.generalSettingsTitle } >
            { props.pageContext.ACFcategory.typ === 'category' ?
                <Categories theme={props} /> :
                <Products  theme={props} />
            }
        </Layout>
    );
};
export default CategoryProduct;