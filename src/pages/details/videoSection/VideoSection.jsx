import React from 'react';
import "./VideoSection.scss";
import { useSelector } from 'react-redux';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import VideoPopup from '../../../components/videoPopup/VideoPopup';
import { useState } from 'react';
import Img from '../../../components/lazyLoadImage/Img';
import { PlayIcon } from '../PlayBtn';

const VideoSection = ({data, loading}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null)

    const skItem = () =>{
        return(
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        )
    }
  return (
    <div className='videosSection'>
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
            <div className="videos">
                {data?.results?.map((video) => (
                    <div key={video.id} className="videoItem" onClick={() => {
                        setVideoId(video.key)
                        setShow(true)
                    }}>
                        <div className="videoThumbnail">
                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                            <PlayIcon />
                            <div className="videoTitle">
                                {video.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ): (
            <div className="videoSkeleton">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
            </div>
        )}
      </ContentWrapper>
      <VideoPopup 
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
        />
    </div>  
  )
}

export default VideoSection
