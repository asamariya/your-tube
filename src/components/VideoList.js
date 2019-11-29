import React from 'react';
// import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({
  videos,
  onVideoSelect,
  setFavouriteVideos,
  favouriteVideos
}) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem
      key={id}
      video={video}
      onVideoSelect={onVideoSelect}
      setFavouriteVideos={setFavouriteVideos}
      favouriteVideos={favouriteVideos}
    />
  ));
  return <div className="video-list mt-4">{listOfVideos}</div>;
};

export default VideoList;
