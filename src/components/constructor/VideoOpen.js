import React, {useState, useRef, useEffect} from 'react';
//import lozad from "lozad";


const VideoOpen = ( {video} ) => {


    let videoCode;
    if (video) {
        videoCode = video.split("v=")[1].split("&")[0];
    }

    // const { observe } = lozad("[data-use-lozad-iframe]", {
    //     rootMargin: '300px 0px', // syntax similar to that of CSS Margin
    //     threshold: 0.1, // ratio of element convergence
    //     loaded: el => {
    //         el.classList.add("fade");
    //     }
    // });
    //
    // useEffect(() => {
    //     observe();
    // }, [observe]);


    //const ref = useRef(null);

    // useScrollPosition(function setScrollPosition ({ currentPosition }) {
    //     console.log('div >>>', ref.current.getBoundingClientRect().top, ref );
    //     const p = ref.current.getBoundingClientRect().top;
    //     const h = ref.current.clientHeight;
    //
    //     if ( p < 0 ) {
    //         setStatusPlay(statusPlay);
    //         console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
    //     }
    //
    //     // if (statusPlay === true) {
    //     //     document.getElementById(videoCode).contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    //     // } else {
    //     //     //document.getElementById(videoCode).contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    //     // }
    //     //
    //     // console.log('>>>' , statusPlay);
    //
    //
    //
    //     // {
    //     //     //currentPosition.y
    //     // }
    //
    //     // if (firstScroll === false) {
    //     //     firstSetScroll(!firstScroll)
    //     // }
    // });

    return (
        <div className='pos block-video block-iframe video-animate'>
            {/*<VideoIframe videoUrl={video} open={open} />*/}

            <div className="fon"></div>

            <div className={`statusPlay`} >
                <iframe data-use-lozad-iframe id={videoCode} className="youtube-video lozad fade" width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${videoCode}?autoplay=1&modestbranding=1&controls=0&mute=1`}
                        frameBorder="0" allowFullScreen></iframe>
            </div>

            {/*<YouTube videoId={videoCode} opts={opts} />*/}

            {/*<div className="exit"></div>*/}
            {/*<div className="play">*/}
            {/*    {(open ? <VideoIframe videoUrl={video} open={open} /> : (first === true ? <VideoIframe videoUrl={video} open={open} /> : '') )}*/}
            {/*</div>*/}
            {/*{(open ? <VideoIframe videoUrl={video} open={open} /> : (first === true ? <VideoIframe videoUrl={video} open={open} /> : '') )}*/}
        </div>
    );


};
export default VideoOpen;

// const clickHandler = () => {
//     setOpen(!open)
//
//     if (first === false) {
//         firstOpen(!first)
//     }
//     //console.log(open);
//
//     if (open === false) {
//
//         //console.log('&& >> true');
//
//         // const data_src = document.querySelector('.box-iframe iframe')?.getAttribute("data-src");
//         // document.querySelector('.box-iframe iframe')?.setAttribute("src", data_src);
//         //
//         //
//         //
//         // ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
//         // document.body.classList.add(
//         //     'ovh',
//         // );
//         // //console.log('>>', this);
//         // setTimeout(() => {
//         //     document.querySelector('.box-iframe')?.classList.add('visible');
//         // }, 2000);
//
//
//     }
//     if (open === true) {
//         //console.log('&& >> false');
//
//         // document.body.classList.remove(
//         //     'ovh',
//         // );
//
//
//         // setTimeout(() => {
//         //     document.querySelector('.box-iframe')?.classList.remove('visible');
//         // }, 500);
//
//         // setTimeout(() => {
//         //     const src = document.querySelector('.box-iframe iframe').getAttribute("src");
//         //     document.querySelector('.box-iframe iframe').setAttribute("data-src", src);
//         //     document.querySelector('.box-iframe iframe').setAttribute("src", '');
//         // }, 700);
//
//
//     }
//
//     //console.log('ref >>> ', ref);
// };