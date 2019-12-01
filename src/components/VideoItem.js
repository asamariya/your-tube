import React, { useState } from 'react';

import VideoPlayer from './VideoPlayer';

const VideoItem = ({
  video,
  setFavouriteVideos,
  favouriteVideos,
  isFavourite
}) => {
  const [modalShow, setModalShow] = useState(false);

  const addFavourite = video => {
    setFavouriteVideos(favouriteVideos => favouriteVideos.concat(video));
  };
  const removeFavourite = video => {
    const videoId = video.id.videoId;
    setFavouriteVideos(
      favouriteVideos.filter(vid => vid.id.videoId !== videoId)
    );
  };

  const showFavText = () => {
    const videoCard = document.querySelector(`#video-id${video.id.videoId}`);
    const favText = videoCard.querySelector('.fav-text');
    favText.style.opacity = '1';
  };
  const hideFavText = () => {
    const videoCard = document.querySelector(`#video-id${video.id.videoId}`);
    const favText = videoCard.querySelector('.fav-text');
    favText.style.opacity = '0';
  };

  return (
    <div className="video-card d-flex mb-3" id={`video-id${video.id.videoId}`}>
      <div
        className="video-img d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${video.snippet.thumbnails.high.url})`
        }}
        onClick={() => setModalShow(true)}
      >
        <i className="fas fa-play fa-3x play-icon"></i>
      </div>

      <VideoPlayer
        video={video}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="video-info">
        <h5>{video.snippet.title}</h5>
        <div className="add-fav d-flex justify-content-between pr-2 mb-2">
          <p className="flex-grow-1">
            <small>{video.snippet.channelTitle}</small>
          </p>
          {!isFavourite ? (
            <div className="favourite d-flex align-items-center">
              <p className="mr-1 fav-text">
                <small>Add as favourite</small>
              </p>

              <i
                className="far fa-heart fav-icon"
                onClick={() => addFavourite(video)}
                onMouseEnter={showFavText}
                onMouseLeave={hideFavText}
              ></i>
            </div>
          ) : (
            <div className="favourite d-flex align-items-center">
              <p className="mr-1 fav-text">
                <small>Remove as favourite</small>
              </p>
              <i
                className="fas fa-heart fav-icon"
                onClick={() => removeFavourite(video)}
                onMouseEnter={showFavText}
                onMouseLeave={hideFavText}
              ></i>
            </div>
          )}
        </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
