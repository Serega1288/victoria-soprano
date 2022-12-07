import React from "react";
import styled from "styled-components";
import {maxCol, minCol} from "../../function/SizeCol";
import {Link} from "gatsby"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Lazy } from "swiper";

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

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
                            console.log('LikeProduct >>>', item);
                            return (
                            <SwiperSlide key={index}>
                                <Link to={item.uri} className="slider-item anim pos"
                                     key={index}>
                                    <BackgroundImage
                                        className="ImageBG"
                                        Tag="div"
                                        // Spread bgImage into BackgroundImage:
                                        {...convertToBgImage(getImage(item?.featuredImage?.node?.localFile?.childImageSharp))}
                                        preserveStackingContext
                                    />
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
                padding-top: 155%;
                background-size: cover;
                background-position: center center;
                display: block;
           }   
    }
    .ImageBG {
        padding-top: 130%;
    }
    .slider-item {
        margin-bottom: 6rem;
        & > * {
            position: absolute !important;
            top:0;
            bottom:0;
            left:0;
            right:0;
        }
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
