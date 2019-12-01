import React from 'react';
import VideoList from './VideoList';
const Home = ({ videos, setFavouriteVideos, favouriteVideos }) => {
  return (
    <div className="container videos">
      <span className="relative highlight highlight-pink">
        <span className="relative z-2 h2">Home</span>
      </span>
      <VideoList
        videos={videos}
        setFavouriteVideos={setFavouriteVideos}
        favouriteVideos={favouriteVideos}
      />
    </div>
  );
};

export default Home;
