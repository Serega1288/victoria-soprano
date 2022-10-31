import React from 'react';

const VideoIframe = ({video}) => {
    //const { v } = video.match.params;

    const v = video.split('?v=');
    const url = v[1].split('&');

    //console.log('v >>>', url[0] );
    return (
        <div className="box-iframe">
            <iframe src={`https://www.youtube.com/embed/${url[0]}?listType=user_uploads`}></iframe>
            {/*<iframe src={`https://www.youtube.com/embed/${url[0]}?autoplay=1&mute=1&listType=user_uploads`}></iframe>*/}
        </div>
    );
}
export default VideoIframe;

















