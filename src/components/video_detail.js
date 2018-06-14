import React from 'react';

/*<div className="embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item" 
src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen>
</iframe>
</div>*/

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    console.log(videoId);
    const url = `https://www.youtube.com/embed/${videoId}` + `?rel=0`;
    console.log(url);

    return (
    <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowFullScreen>
            </iframe>
        </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>      
    );
};
console.log(VideoDetail);
export default VideoDetail;
