import React from 'react';
import {minCol, maxCol} from "../function/SizeCol";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import searchSVG from '../assets/img/search.svg'

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
                <div className="container box-desc">
                    <div className="row">
                        <div className="col-12 box-title">
                            <Title item={props.pageContext} />
                        </div>
                        <div className="col-12 col-sm-6  box-gallery pos z-in-1">
                            <Gallery
                                firstImage={props.pageContext.featuredImage}
                                item={props.pageContext.ACFBox.gallery}
                                listVideo={props.pageContext.ACFBox.listVideo}
                            />
                        </div>
                        <div className="col-12 col-sm-6 d-flex justify-content-center pos z-in-2">
                            <div className="box-product-desc">
                                <BoxProductDesc item={props.pageContext} />
                            </div>
                        </div>
                    </div>
                </div>
                { props.pageContext.ACFBox?.like && (<LikeProduct item={props.pageContext.ACFBox.like} />) }
            </Section>
        </Layout>
    );
};
export default Product;


const Section = styled.section`
    .WrapIframe {
        overflow: hidden;
        position: absolute;
        top:0;
        bottom:0; 
        left: 0;
        right: 0;
        z-index:2;
    }
    .slider-item-iframe {
        position: absolute;
        //top:-7rem;
        top:0; 
        width: 100%;
        height: 100%;
        //height: calc(100% + 7rem + 7rem);
        left: 0;
        right: 0;
        z-index:2;
        iframe {
            opacity: 0;    
            &.active-iframe {
                opacity: 1;
            }
        }
        
    }
    .zoom-image {
        cursor: pointer;
        position: relative;
        &:before {
            position: absolute;
            top: 2rem;
            right: 2rem;
            content:'';
            display: block;
            width: 4rem;
            height: 4rem;
            background-image: url(${searchSVG});
        }
    }
    .zoom-image {
        cursor: pointer;
        position: relative;
        &:before {
            position: absolute;
            top: 2rem;
            right: 2rem;
            content:'';
            display: block;
            width: 4rem;
            height: 4rem;
            background-image: url(${searchSVG});
        }
    }
    .play {
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.6);
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before {
            margin-left: 0.5rem;
            content: '';
            display: block;
            border-top: 1.8rem solid transparent;
            border-left: 3rem solid rgba(255, 255, 255, 0.6);
            border-bottom: 1.8rem solid transparent;
        }
    }
    .box-desc {
        margin-bottom: 10rem;
        @media(max-width: ${maxCol.sm}) {
            margin-bottom: 5rem;    
        }
    }
    @media(max-width: ${maxCol.sm}) {
        .container {
            padding: 0;
        }
        .CollapsList-text {
            display: flex;
            flex-wrap: wrap;
            & > * {
                flex: 0 0 auto;
                width: 50%;
            }
        }
    }
    .CollapsList-text-sub-text {
        margin-bottom: 2rem;
        line-height: 1;
        @media(max-width: ${maxCol.sm}) {
            margin-bottom: 2.5rem;
            font-size: 1.6rem;
        }
        span span {
            margin-right: 0.5rem;
            display: inline-block;
        }
        span:last-child span {
            display: none; 
        }
    }
    .CollapsList-text-sub-title {
        color: #c4c4c4;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        line-height: 1;
        @media(max-width: ${maxCol.sm}) {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }
    }
    .CollapsList-product-attribute {
        display: inline-block;
        @media(max-width: ${maxCol.sm}) {
            display: block;
        }
        .CollapsList-title {
            margin-bottom: 2.5rem;
            cursor: pointer;
            line-height: 1;
            position: relative;
            padding-right: 40px;
            span { 
                color: #000;
                font-family: 'Bolkit';
                font-size: 4.5rem; 
                @media(max-width: ${maxCol.sm}) {
                    font-size: 3rem;
                }
                font-weight: 700;
                margin-bottom: 2.5rem;
            } 
            svg {
                position: absolute;
                top:0;
                right: 0;
                z-index: 1;
                transform: rotate(180deg);
                @media(max-width: ${maxCol.sm}) {
                    width: 2rem;
                    height: 1.2rem;
                    bottom: 0;
                    margin: auto;
                }
            }
            &.active {
                svg {
                    transform: rotate(0deg);
                }
            }
        }
    }
    
    .box-desc-2 {
       margin-top: 4rem;
        margin-bottom: 5rem; 
        @media(max-width: ${maxCol.sm}) {
            a {
                margin-bottom: 2.5rem;
            }
        } 
        
    }
    .box-desc-1 {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        img {
            margin-right: 0.8rem;
        }
        .a {
            cursor: pointer;
            color: #000000;
            text-decoration: none;
            display:  inline-flex;
            padding-bottom: 0.2rem;
            padding-top: 0.2rem; 
            &:last-child {
                margin-left: 6rem;
            }
            span:after { 
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background-color: #000;
            }
            &:hover {
                color: #86644b;
                span:after {
                    background-color: #86644b; 
                }
            }
        }
    }
    .box-product-desc {
        @media(max-width: ${maxCol.xl}) {
            padding-left: 2rem;
        } 
        @media(max-width: ${maxCol.sm}) {
            padding-left: 1.6rem;
            padding-right: 1.6rem;
            
        } 
        @media(min-width: ${minCol.xl}) {
            width: 42rem;
        }
    }
    .text {
        p {
            margin-bottom: 2.5rem;
            @media(max-width: ${maxCol.sm}) {
                margin-bottom: 1.5rem;
                font-size: 1.6rem;
            }
        }
    }
    .sub-title {
        font-size: 3rem;
        text-transform: uppercase;
         color: #000000;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 2.5rem;
        @media(max-width: ${maxCol.sm}) {
            margin-bottom: 1.5rem;
            font-size: 2.2rem;
        }
    }
    .box-gallery {
        
    }
    .BoxProductDesc {
        
    }
    
    .mySwiper2 {
        .slider-item {
            padding-top: 150%;
            @media(max-width: ${maxCol.sm}) {
                padding-top: 170%;
            }
            background-position: center center;
            background-size: cover;
        }
        .swiper-slide-active {
         
        }
        margin-bottom: 5rem;
        @media(max-width: ${maxCol.sm}) {
            .swiper-button-prev, .swiper-button-next {
                opacity: 0;
                visibility: hidden;
            }
            .slider-item {
                margin-bottom: 2rem;
            }
        }
        .swiper-pagination {
            display: none;
            @media(max-width: ${maxCol.sm}) {
                display: block;
                bottom:0;
                position: relative;
            } 
        }
    }
    
    .mySwiper {
        @media(max-width: ${maxCol.sm}) {
            display: none;
        } 
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
    
    .swiper-button-next, .swiper-button-prev {
        color: #fff;
    }
    
    
`;