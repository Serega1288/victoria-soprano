import React from 'react';
import {minCol, maxCol} from "../function/SizeCol";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Layout from '../components/Layout';
import searchSVG from '../assets/img/search.svg'
import downloadSVG from '../assets/img/download.svg'
import pinterest from '../assets/img/pinit_fg_en_round_red_32.png'

import Title from "../components/constructor/Title";
import Gallery from "../components/Products/Gallery";
import BoxProductDesc from "../components/Products/BoxProductDesc";
import LikeProduct from "../components/Products/LikeProduct";

const Product = (props) => {

    const page = props;

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


    // console.log('Product page', page);

    return (
        <Layout title={ page.pageContext.node.title } desc={ data.wp.allSettings.generalSettingsTitle } >
            <Section>
                <div className="container box-desc">

                    <div className="row">
                        <div className="col-12 box-title d-block d-sm-none">
                            <Title item={page.pageContext.node} />
                        </div>

                        <div className='col-12'>
                            <div className='NavPages'>
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-end">
                                        {
                                            page.pageContext.previous && (
                                                <Link className='btn style-6' to={page.pageContext.previous.uri}>
                                                    Prev<span className='d-none d-sm-inline'>: {page.pageContext.previous.title}</span>
                                                </Link>
                                            )
                                        }
                                    </div>
                                    <div className="col-6">
                                        {
                                            page.pageContext.next && (
                                                <Link className='btn style-6' to={page.pageContext.next.uri}>
                                                    Next<span className='d-none d-sm-inline'>: {page.pageContext.next.title}</span>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-7  box-gallery pos z-in-1">
                            <Gallery
                                videofirstimage={page.pageContext.node.ACFBox.videofirstimage}
                                firstImage={page.pageContext.node.featuredImage}
                                item={page.pageContext.node.ACFBox.gallery}
                                listVideo={page.pageContext.node.ACFBox.listVideo}
                            />


                        </div>
                        <div className="col-12 col-sm-6 col-lg-5 d-flex align-items-center flex-column pos z-in-2 box-content">

                            <div className="box-product-desc">
                                <div className="box-title d-none d-sm-block">
                                    <Title item={page.pageContext.node} />
                                </div>
                                <BoxProductDesc item={page.pageContext.node} />
                            </div>

                        </div>
                    </div>



                </div>
                { page.pageContext.node.ACFBox?.like && (<LikeProduct item={page.pageContext.node.ACFBox.like} />) }


                {/*<div className="container">*/}
                {/*    <div className='NavPages'>*/}
                {/*        <div className="row">*/}
                {/*            <div className="col">*/}
                {/*                {*/}
                {/*                    page.pageContext.previous && (*/}
                {/*                        <Link className='btn style-2' to={page.pageContext.previous.uri}>*/}
                {/*                            Previous: {page.pageContext.previous.title}*/}
                {/*                        </Link>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*            <div className="col-auto">*/}
                {/*                {*/}
                {/*                    page.pageContext.next && (*/}
                {/*                        <Link className='btn style-2' to={page.pageContext.next.uri}>*/}
                {/*                            Next: {page.pageContext.next.title}*/}
                {/*                        </Link>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </Section>
        </Layout>
    );
};
export default Product;


const Section = styled.section`
    .art {
      color: #86644B;
      margin-top: 0rem;
      margin-bottom: 3rem;
      font-size: 3rem;
      span {
        color: #000;
        margin-left: 0.5rem;
        font-weight: 400;
        //font-size: 2.4rem;
      }
      @media(max-width: ${maxCol.sm}) {
        font-size: 2rem;
      }
    } 
    
    .wrapImgGallery { 
      margin-bottom: 1.5rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      padding-bottom: 150%;
      .imgGallery {
        position: absolute !important;
        top: 0;
        bottom: 0;
        height: 100%;
        left: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        max-width: 100%;
      } 
    }
    .box-content {
      .title {
        margin-top: 0;
        text-align: left;
        margin-bottom: 4rem;
      }
      .price {
        span {
          color: #86644B;
        }
        margin-bottom: 2rem;
      }
    }
    .NavPages {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      z-index: 10;
      background-color: #f7f4ed;
      border: 1px solid #000;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      .btn {
        min-width: 30rem;
        text-align: center;
      }
    }
    .pinterest {
        // background-image: url(${pinterest});
        display: inline-block;
        position: absolute;
        bottom: 1rem;
        z-index: 10;
        left: 2rem;
        a {
            position: relative;
            &:before {
                content: 'Save';
                position: absolute;
                left: 100%;
                top: 0;
                bottom: 0;
                font-weight: 700;
                //color: #e60023; 
                color: #fff; 
                margin: auto 0.5rem;
                font-size: 1.8rem;
                display: flex;
                align-items: center;
            }
        }
    }
    .ImgDownload {
        background-image: url(${downloadSVG});
        width: 3rem;
        height: 4rem;
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        z-index: 2;
        @media(max-width: ${maxCol.sm}) {
            bottom: 1.5rem;
        }
    }
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
    .iframeBefore, .iframeAfter {
        width: 40%;
        z-index: 5;
        position: absolute;
        top: 0;
        bottom:0;
        left:0;
    }
    .iframeAfter {
        right:0;
        left: auto;
    }
    .zoom-image {
        padding-top: 150%;
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
        img {
           object-fit: cover;
            position: absolute;
            height: 100%;
            width: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
        margin-top: 10rem;
        @media(max-width: ${maxCol.sm}) {
            margin-bottom: 5rem;   
            margin-top: 0;
        }
    }
    @media(max-width: ${maxCol.sm}) {
      .box-row-Gallery {
        overflow: scroll;
        flex-wrap: nowrap;
        margin-bottom: 4rem;
        & > * {
          width: 80%;
        }
      }
      .NavPages .btn {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
        text-align: center;
        min-width: inherit;
      }
        .container {
            padding: 0;
        }
        .CollapsList-text {
            display: flex;
            flex-wrap: wrap;
            //& > * {
            //    flex: 0 0 auto;
            //    width: 50%;
            //}
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
        a:last-child {
            margin-left: 1rem;
        }
        @media(max-width: ${maxCol.sm}) {
            a {
                margin-bottom: 2.5rem;
                &:last-child {
                    margin-left: 0;
                }
            }
        } 
        
    }
    .box-desc-1 {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        img {
            margin-right: 0.8rem;
        }
      .save {
        span {
          
        }
      }
        .a {
            margin-left: 2.5rem !important;
            cursor: pointer;
            color: #000000;
            text-decoration: none;
            padding-bottom: 0.2rem;
            padding-top: 0.2rem;
            &:first-child {
              margin-left: 0rem !important;
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
        width: 100%;
        @media(max-width: ${maxCol.xl}) {
            padding-left: 2rem;
        } 
        @media(max-width: ${maxCol.sm}) {
            padding-left: 1.6rem;
            padding-right: 1.6rem;
            
        } 
        @media(min-width: ${minCol.xl}) {
            //width: 42rem;
            padding-left: 4rem;
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
    a.pinterest {
        opacity: 0;
    }
    [data-pin-log="button_pinit"] {
        opacity: 1;
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
