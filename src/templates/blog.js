import React from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import Const from "../components/constructor/Constructor";
import BlogPosts from "../components/Blog/BlogPosts"

const Blog = (props) => {
    // console.log('Blog >>', props);
    const { data, pageContext } = props;
    //const posts = data.posts.nodes;

    const dataUseStatic = useStaticQuery(graphql`  
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
        <Layout title={ props.pageContext.title } desc={ dataUseStatic.wp.allSettings.generalSettingsTitle } >
            <Const href={props.location.href} props={list} />
            <BlogPosts />
            {/*<Pagination pageContext={pageContext} />*/}
        </Layout>
    );
};
export default Blog;

