import React, { useEffect } from 'react';
import VideoList from './VideoList';
const Home = ({
  videos,
  setFavouriteVideos,
  favouriteVideos,
  handleSubmit
}) => {
  useEffect(() => {
    handleSubmit('a pigeon sat on a branch reflecting on existence');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
