import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Lazy } from "swiper";

const Gallery = (prop) => {
    //console.log('page product gallery', prop);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={22}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Lazy]}
                className="mySwiper2"
                preloadImages={false}
                lazy={{
                    enabled: true,
                    loadOnTransitionStart: true
                }}
            >
                {
                    prop.firstImage && (
                        <SwiperSlide>
                            <div className="slider-item swiper-lazy"
                                 key={prop.firstImage.node.localFile.publicURL}
                                 data-background={prop.firstImage.node.localFile.publicURL} >
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </SwiperSlide>
                    )
                }


                {prop.item.map( (item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider-item swiper-lazy"
                             key={item.localFile.publicURL}
                             data-background={item.localFile.publicURL} >
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={22}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Lazy]}
                className="mySwiper"
                preloadImages={false}
                lazy={{
                    enabled: true,
                    loadOnTransitionStart: true
                }}
            >

                {
                    prop.firstImage && (
                        <SwiperSlide>
                            <div className="slider-item swiper-lazy"
                                 key={prop.firstImage.node.localFile.publicURL}
                                 data-background={prop.firstImage.node.localFile.publicURL} >
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </SwiperSlide>
                    )
                }

                {prop.item.map( (item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider-item swiper-lazy anim"
                             key={item.localFile.publicURL}
                             data-background={item.localFile.publicURL} >
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
export default Gallery;