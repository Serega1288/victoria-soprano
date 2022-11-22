import React, { useState } from "react";
import YouTube, { YouTubeProps } from 'react-youtube';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "../../function/fancybox.js";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {FreeMode, Navigation, Thumbs, Lazy, Pagination} from "swiper";
import {Script} from "gatsby";

const Gallery = (prop) => {
    //console.log('page product gallery', prop);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const play = (swiper) => {

        // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        //     // access to player in all event handlers via event.target
        //     event.target.pauseVideo();
        // }

        // _onReady(event) {
        //     // access to player in all event handlers via event.target
        //     event.target.pauseVideo();
        // }
      console.log('>>>', swiper)
        console.log('>>> prev', swiper.previousIndex)
        console.log('>>> active', swiper.activeIndex)
        const prevId = 'stepIframe' + swiper.previousIndex
        const activeId = 'stepIframe' + swiper.activeIndex

        const getPreveUrlData = document.getElementById(prevId)?.getAttribute('stop-src');
        const getActiveUrl = document.getElementById(activeId)?.getAttribute('play-src');

        document.getElementById(prevId)?.setAttribute('src', getPreveUrlData);
        document.getElementById(activeId)?.setAttribute('src', getActiveUrl);

        document.getElementById(prevId)?.classList.remove("active-iframe");
        document.getElementById(activeId)?.classList.add("active-iframe");


        // document.getElementById(prevId)?.classList.remove("active-iframe")?.contentWindow?.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        // document.getElementById(activeId)?.classList.add("active-iframe")?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')

        //document.querySelectorAll(`[stepIframe="${swiper.previousIndex}"]`)? .contentWindow?.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        //document.querySelectorAll(`[stepIframe="${swiper.activeIndex}"]`)?.contentWindow?.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
    }

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //version:3,
            controls: 0,
            modestbranding: 1,
            enablejsapi:1,
            html5: 1,
            mute: 0,
            loop: 1,
            rel:0,
            fs: 1,
        },
    };

    function onReady(s) {
        console.log('s>>', s)
    }

    return (
        <>
            {/*<Script*/}
            {/*    src="https://assets.pinterest.com/js/pinit.js"*/}
            {/*    onLoad={() => console.log("success")}*/}
            {/*    onError={() => console.log("sadness")}*/}
            {/*/>*/}
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                }}
                spaceBetween={22}
                pagination={true}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Lazy, Pagination]}
                className="mySwiper2"
                preloadImages={true}
                lazy={{
                    enabled: true,
                    loadOnTransitionStart: true
                }}

                onSlideChange={(swiper) => play(swiper)}
            >
                {
                    prop.firstImage && (
                        <SwiperSlide>
                            <a target="_blank" download href={prop.firstImage.node.localFile.publicURL} className="ImgDownload"></a>
                            <span className="pinterest">
                            <a className="pinterest" data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true"
                                    data-pin-media={prop.firstImage.node.localFile.publicURL}
                                    data-pin-log="button_pinit_bookmarklet pinterest"
                                    href="https://www.pinterest.com/pin/create/button/">
                                Save
                            </a>
                            </span>

                            <Fancybox>

                                <div  className="zoom-image"
                                     key={prop.firstImage.node.localFile.publicURL}
                                     // data-background={prop.firstImage.node.localFile.publicURL}
                                     href={prop.firstImage.node.localFile.publicURL}
                                >
                                    <img data-fancybox={0} className="" src={prop.firstImage.node.localFile.publicURL} alt="" />
                                </div>
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>

                            </Fancybox>
                        </SwiperSlide>
                    )
                }



                { prop.item && (
                    prop.item && ( prop.item.map( (item, index) => {
                    const step = index+1;
                    // const img = item.localFile.publicURL;
                    return (
                    <SwiperSlide key={index}>
                        {
                            prop.listVideo?.map( (item, index) => {
                                console.log('>>>>>', item.video.split('?v=')[1].split('&'));
                                return (
                                    step === item.numberStep && (
                                        <div  key={index} className="WrapIframe">
                                            {/*<YouTube*/}
                                            {/*    id={`stepIframe${step}`}*/}
                                            {/*    videoId={`${item.video.split('?v=')[1].split('&')}`}*/}
                                            {/*    opts={opts}*/}
                                            {/*    onReady={onReady}*/}
                                            {/*    className="slider-item-iframe anim"*/}
                                            {/*/>*/}
                                            <div className="iframeBefore"></div>
                                            <iframe
                                            id={`stepIframe${step}`}
                                            className="slider-item-iframe"
                                            play-src={`https://www.youtube.com/embed/${item.video.split('?v=')[1].split('&')}?autoplay=1&modestbranding=1&controls=0&mute=0&loop=1`}
                                            stop-src={`https://www.youtube.com/embed/${item.video.split('?v=')[1].split('&')}?autoplay=0&modestbranding=1&controls=0&mute=0&loop=1`}
                                            src={`https://www.youtube.com/embed/${item.video.split('?v=')[1].split('&')}?autoplay=0&modestbranding=1&controls=0&mute=0&loop=1`}
                                            >
                                            </iframe>
                                            <div className="iframeAfter"></div>
                                        </div>
                                    )
                                )
                            })
                        }
                        <a download href={prop.firstImage.node.localFile.publicURL} className="ImgDownload"></a>
                        <span className="pinterest">
                            <a className="pinterest" data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true"
                               data-pin-media={prop.firstImage.node.localFile.publicURL}
                               data-pin-log="button_pinit_bookmarklet pinterest"
                               href="https://www.pinterest.com/pin/create/button/">
                                Save
                            </a>
                            </span>

                        <Fancybox>

                            <div data-fancybox={index+1} className="zoom-image"
                                 key={item.localFile.publicURL}
                                 // data-background={item.localFile.publicURL}
                                 href={item.localFile.publicURL}
                            >
                                <img className="" src={item.localFile.publicURL} alt=""/>
                            </div>
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </Fancybox>


                    </SwiperSlide>
                )})))}

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={22}
                slidesPerView={3}
                freeMode={true}
                navigation={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Lazy, Pagination]}
                className="mySwiper"
                preloadImages={true}
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



                {
                    prop.item && (
                    prop.item.map( (item, index) => {
                    const step = index+1;
                    return (
                    <SwiperSlide key={index}>
                        <div className="slider-item swiper-lazy anim"
                             key={item.localFile.publicURL}
                             data-background={item.localFile.publicURL}
                             // stepOk={prop.listVideo?.listVideo}
                        >
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        {
                            prop.listVideo?.map( (item, index) => {
                                return (
                                    step === item.numberStep && (
                                        <div key={index} className="play"></div>
                                    )
                                )
                            })
                        }
                    </SwiperSlide>
                )}))}

            </Swiper>
        </>
    );
}
export default Gallery;