import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy } from 'swiper';
import {minCol, maxCol} from "../../function/SizeCol";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper";

const Slider = ( { item } ) => {
    //console.log('Slider >>>', item.sliders);

    const Section = styled.section`
         .section-box {
            padding-bottom: 6rem;
            @media(max-width: ${maxCol.sm}) {
                padding-bottom: 3.5rem;
            }
         }
         .slider-item {
            background-size: cover;
            background-position: top center;
            min-height: calc(100vh); 
            //min-height: calc(100vh - 8.8rem - 9rem); 
            // @media(min-width: ${minCol.md}) {  
                //min-height: calc(100vh - 13.4rem);
                                min-height: calc(100v);
            }
         }
         .swiper {
            overflow: inherit;
         }
         .swiper-lazy-preloader {
            
         }
         .swiper-scrollbar {
            width: 77.6rem !important; 
            height: 25px !important;
            margin: auto !important; 
            left: 0 !important;
            right: 0;
            bottom: 0rem !important;
            overflow: hidden;
            background: rgba(0,0,0,0);
            @media(max-width: ${maxCol.lg}) { 
                height: 12px !important;
            }
            @media(max-width: ${maxCol.sm}) {
                width: 34rem !important; 
                bottom: 0rem !important; 
            }
            &:before {
                content: '';
                left:0;
                right: 0;
                top:0;
                bottom:0;
                margin: auto;
                height: 1px;
                background: #1a0f07;
                position: absolute;
            }
            .swiper-scrollbar-drag {
                height: 25px;
                @media(max-width: ${maxCol.lg}) {
                   height: 12px; 
                }
                border-radius: 50%;
                background: #000;
            }
         }
    `;

    return (
        <Section className="slider section">
            <div className="container box-title">
                <h2 className="block-title">
                    {item.blocktitle}
                </h2>
            </div>
            <Swiper
                breakpoints={{
                    992: {
                        scrollbar: {
                            dragSize: 25,
                        }
                    },
                }}
                className="section-box mySwiper"
                scrollbar={{
                    hide: false,
                    dragSize: 12,
                    draggable: true,
                }}
                modules={[Autoplay, Scrollbar, Lazy]}
                preloadImages={true}
                loop={false}
                speed={1500}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": true
                }}
                lazy={{
                    enabled: true,
                    loadOnTransitionStart: true
                }}
            >
                {item.sliders.map( (item, index) => (
                    <SwiperSlide key={index}>
                        <div className="d-none d-sm-block slider-item swiper-lazy"
                             key={item.fotoSlider.localFile.publicURL}
                             data-background={item.fotoSlider.localFile.publicURL} >
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div className="d-block d-sm-none slider-item swiper-lazy"
                             key={item.fotoSliderMob.localFile.publicURL}
                             data-background={item.fotoSliderMob.localFile.publicURL} >
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};
export default Slider;

