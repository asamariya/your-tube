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
    const favText = document.querySelector('.fav-text');
    favText.style.opacity = '1';
  };
  const hideFavText = () => {
    const favText = document.querySelector('.fav-text');
    favText.style.opacity = '0';
  };

  return (
    <div className="video-card d-flex mb-3">
      <div
        className="video-img relative"
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
    // <Grid item xs={12}>
    //   <Paper
    //     style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    //     onClick={() => onVideoSelect(video)}
    //   >
    //     <img
    //       src={video.snippet.thumbnails.medium.url}
    //       alt="video thumbnail"
    //       style={{ marginRight: '20px' }}
    //     />
    //     <span
    //       style={{
    //         height: '24px',
    //         width: '24px',
    //         borderRadius: '50%',
    //         backgroundColor: 'green',
    //         cursor: 'pointer'
    //       }}
    //       onClick={() => addFavourite(video)}
    //     ></span>
    //     <Typography variant="subtitle1">
    //       {/* <strong>{video.snippet.title}</strong> */}
    //       <strong>
    //         <span role="img" aria-label="Point left">
    //           👈🏼
    //         </span>
    //         Add as favourite
    //       </strong>
    //     </Typography>
    //   </Paper>
    // </Grid>
  );
};

export default VideoItem;
