import React from 'react';
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';

import Title from "../components/constructor/Title";
import Gallery from "../components/Products/Gallery";
import BoxProductDesc from "../components/Products/BoxProductDesc";
import LikeProduct from "../components/Products/LikeProduct";

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


    console.log('Product page', props);

    return (
        <Layout title={ props.pageContext.title } desc={ data.wp.allSettings.generalSettingsTitle } >
            <Section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 box-title">
                            <Title item={props.pageContext} />
                        </div>
                        <div className="col-12 col-sm-6  box-gallery">
                            <Gallery firstImage={props.featuredImage?.none.localFile.publicURL} item={props.pageContext.ACFBox.gallery} />
                        </div>
                        <div className="col-12 col-sm-6 box-product-desc">
                            <BoxProductDesc item={props.pageContext} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <LikeProduct />
                </div>
            </Section>
        </Layout>
    );
};
export default Product;


const Section = styled.section`
    .box-title {
         
    }
    .box-gallery {
        
    }
    .BoxProductDesc {
        
    }
    
    .mySwiper2 {
        .slider-item {
            padding-top: 118%;
            background-position: top center;
            background-size: cover;
        }
        .swiper-slide-active {
         
        }
        margin-bottom: 5rem;
    }
    
    .mySwiper {
        .swiper-slide {
            cursor: pointer;
        }
        .slider-item {  
            padding-top: 100%;
            background-position: top center;
            background-size: cover;
            opacity: 0.7;
        }
        .swiper-slide-thumb-active {
            .slider-item {  
                opacity: 1; 
            } 
        }
    }
    
    
`;