import React, { useRef, useState } from "react";
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";
import {Link} from "gatsby"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Lazy } from "swiper";

const TitleH = styled.div` 
        
        .title {
            font-weight: 700;
            font-size: 6.8rem; 
            line-height: 1;
            margin-top: 5rem;
            margin-bottom: 5rem;
            text-align: center;
            @media(max-width: ${maxCol.sm}) {
                margin-top: 3.6rem;
                margin-bottom: 2.6rem;
                font-size: 3.4rem; 
            }
        }
`;

const LikeProduct = ({item}) => {
    //console.log('LikeProduct >', item);

    return (
        <Section className="section boxLikeProduct">
            <TitleH>
                <h1 className="title">
                    Also you will like
                </h1>
            </TitleH>
            <div className="container">

                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },

                        }}
                        spaceBetween={73}
                        slidesPerView={3}

                        pagination={true}
                        modules={[Pagination, Lazy]}
                        className="ListProduct"
                        preloadImages={false}

                        lazy={{
                            enabled: true,
                            loadOnTransitionStart: true
                        }}
                    >

                        {item.map( (item, index) => {
                            //console.log('LikeProduct >>>', item);
                            return (
                            <SwiperSlide key={index}>
                                <Link to={item.uri} className="slider-item swiper-lazy anim"
                                     key={item.featuredImage.node.localFile.publicURL}
                                     data-background={item.featuredImage.node.localFile.publicURL} >
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </Link>
                            </SwiperSlide>
                        )})}

                    </Swiper>


            </div>
        </Section>
    );
}
export default LikeProduct;

const Section = styled.div`

    border-top: 1px solid #000;
    .boxLikeProduct {
        
    }
    .swiper-pagination {
        position: relative;
        bottom: 0;
    }
    .ListProduct {
           .slider-item {
                padding-top: 140%;
                background-size: cover;
                background-position: top center;
                display: block;
           }   
    }
    .ImageBG {
        padding-top: 130%;
    }
    .slider-item {
        margin-bottom: 6rem;
    }
    .swiper-pagination {
        span {
            background-color: #c4c4c4;
            transition: all 0.5s ease;
            &.swiper-pagination-bullet-active {
                background-color: #000;    
            }
        }
    }
    
`;
