import React from 'react';
import VideoList from './VideoList';

export const Results = ({
  videos,
  setSelectedVideo,
  setFavouriteVideos,
  favouriteVideos
}) => {
  return (
    <div className="container videos">
      <span className="relative highlight highlight-pink">
        <span className="relative z-2 h2">Results</span>
      </span>
      <VideoList
        videos={videos}
        setSelectedVideo={setSelectedVideo}
        setFavouriteVideos={setFavouriteVideos}
        favouriteVideos={favouriteVideos}
      />
      {/* <div className="video-list mt-4">{listOfFavVideos}</div> */}
    </div>
  );
};

export default Results;
