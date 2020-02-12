import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    '0': '#FE07E5',
    '1.0': '#7466D7'
  },
  shadowBlur: 5
});

const Home = ({
  videos,
  setFavouriteVideos,
  favouriteVideos,
  handleSubmit
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSubmit('a pigeon sat on a branch reflecting on existence');
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container videos">
      {loading && <TopBarProgress />}
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
