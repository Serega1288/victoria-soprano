import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import BlogItem from "./BlogItem";
import styled from 'styled-components';

const  BlogPosts = (props) => {

    const data = useStaticQuery(graphql`  
        {
            allWpPost {
                nodes {
                  slug
                  title 
                  content
                  ACFImage {
                    image {
                      localFile {
                        publicURL
                      }
                    }
                  }
                }
            }
        } 
    `);

    // ACFImage {
    //     localFile {
    //         publicURL
    //     }
    // }

    const posts = data.allWpPost.nodes;
    //console.log('posts >> ', posts);

    return (
        <section className="section">
            <BlogPost className="container">
                <div className="row row-cols-2 row-cols-sm-3 box-blog-item">
                    {  posts.map((post, index) => (
                        <BlogItem key={post.id} step={index} post={post} />
                    ) ) }
                </div>
            </BlogPost>
        </section>
    )
};

export default BlogPosts;

const BlogPost = styled.div`
    // padding-top: 12rem; 
    // padding-bottom: 12rem;
    .box-blog-item {
        .blog-item {
            .blog-img {
                padding-bottom: 102%;
            }
            &:first-child {
                .blog-img {
                    padding-bottom: 50%;
                }
            }
        }
    }
    .blog-item {
        display: block;
        margin-bottom: 4rem;
        text-decoration: none;
    }
    .blog-item-title {
        
    }
    .blog-img {
        padding-bottom: 100%;
        background-position: center center;
    }
`;