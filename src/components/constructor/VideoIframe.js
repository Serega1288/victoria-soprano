import React from 'react';
import YouTube from 'react-youtube';


const VideoIframe = ({videoUrl}) => {
    //const { v } = video.match.params;
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    let videoCode;
    if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
    }

    // const v = video.split('?v=');
    // const id = v[1].split('&');


   // console.log('v >>>', id[0] );
    return (
        <div className="box-iframe">
            <YouTube videoId={videoCode} opts={opts} />
            {/*<iframe src={`https://www.youtube.com/embed/${url[0]}?listType=user_uploads`}></iframe>*/}
            {/*<iframe src={`https://www.youtube.com/embed/${url[0]}?autoplay=1&mute=1&listType=user_uploads`}></iframe>*/}
        </div>
    );
}
export default VideoIframe;

















