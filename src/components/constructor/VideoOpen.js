import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import VideoIframe from "./VideoIframe";


const VideoOpen = ( {video} ) => {

    const [ first, firstOpen ] = useState(false);
    const [open, setOpen ] = useState(false);
    const ref = useRef(null);

    const clickHandler = () => {
        setOpen(!open)

        if (first === false) {
            firstOpen(!first)
        }
        //console.log(open);

        if (open === false) {

            //console.log('&& >> true');

            const data_src = document.querySelector('.box-iframe iframe')?.getAttribute("data-src");
            document.querySelector('.box-iframe iframe')?.setAttribute("src", data_src);



            ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
            document.body.classList.add(
                'ovh',
            );
            //console.log('>>', this);
            setTimeout(() => {
                document.querySelector('.box-iframe')?.classList.add('visible');
            }, 2000);


        }
        if (open === true) {
            //console.log('&& >> false');

            document.body.classList.remove(
                'ovh',
            );


            setTimeout(() => {
                document.querySelector('.box-iframe')?.classList.remove('visible');
            }, 500);

            setTimeout(() => {
                const src = document.querySelector('.box-iframe iframe').getAttribute("src");
                document.querySelector('.box-iframe iframe').setAttribute("data-src", src);
                document.querySelector('.box-iframe iframe').setAttribute("src", '');
            }, 700);


        }

        //console.log('ref >>> ', ref);
    };

    return (
        <div ref={ref} onClick={clickHandler} className={'pos block-video video-animate ' + (open ? ' open  ' : '')}>
            <div className="exit"></div>
            <div className="play">
                {(open ? <VideoIframe video={video} open={open} /> : (first === true ? <VideoIframe video={video} open={open} /> : '') )}
            </div>
        </div>
    );
};
export default VideoOpen;
