import React from 'react';
import ls from 'local-storage';

import VideoItem from './VideoItem';
const VideoList = ({
  videos,
  onVideoSelect,
  setFavouriteVideos,
  favouriteVideos
}) => {
  const listOfVideos = videos.map((video, id) => {
    // const favourites = JSON.parse(localStorage.getItem('favouriteVideos'));
    const favourites = ls.get('favouriteVideos');
    const isFavourite =
      favourites && favourites.find(vid => vid.id.videoId === video.id.videoId);
    return (
      <VideoItem
        key={id}
        video={video}
        onVideoSelect={onVideoSelect}
        setFavouriteVideos={setFavouriteVideos}
        favouriteVideos={favouriteVideos}
        isFavourite={!!isFavourite}
      />
    );
  });
  return <div className="video-list mt-4">{listOfVideos}</div>;
};
export default VideoList;
