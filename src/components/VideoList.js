import React from 'react';

import VideoItem from './VideoItem';
const VideoList = ({ videos, setFavouriteVideos, favouriteVideos }) => {
  const listOfVideos = videos.map((video, id) => {
    const favourites = JSON.parse(localStorage.getItem('favouriteVideos'));
    const isFavourite =
      favourites &&
      favourites.find(favVid => favVid.id.videoId === video.id.videoId);

    return (
      <VideoItem
        key={id}
        video={video}
        setFavouriteVideos={setFavouriteVideos}
        favouriteVideos={favouriteVideos}
        isFavourite={!!isFavourite}
      />
    );
  });

  return <div className="video-list mt-4">{listOfVideos}</div>;
};
export default VideoList;
