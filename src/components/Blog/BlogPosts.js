import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import BlogItem from "./BlogItem";
import styled from 'styled-components';
import {maxCol} from "../../function/SizeCol";

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
                <div className="row row-cols-1 row-cols-sm-3 box-blog-item">
                    `{  posts.map((post, index) => (
                        <BlogItem key={post.id} step={index} post={post} />
                    ) ) }`
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
            .blog-item-title {
                font-size: 2rem;
                @media(max-width: ${maxCol.sm}) {
                    font-size: 1.5rem;
                }
            }
            &:first-child {
                .blog-img {
                    padding-bottom: 50%;
                    @media(max-width: ${maxCol.sm}) {
                        padding-bottom: 102%;
                    }
                }
                .blog-item-title {
                    font-size: 2.5rem;
                    @media(max-width: ${maxCol.sm}) {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    .blog-item {
        display: block;
        margin-bottom: 4rem;
        text-decoration: none;
        position: relative;
        
    }
    .blog-item-title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255,255,255,0.5);
            z-index: 1;
            min-height: 4rem;
            margin: 3rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
    }
    .blog-img {
        padding-bottom: 100%;
        background-position: top center;
    }
`;