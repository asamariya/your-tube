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

const FavouriteVideos = ({ favouriteVideos, setFavouriteVideos }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="container videos">
      {loading && <TopBarProgress />}
      <span className="relative highlight highlight-pink">
        <span className="relative z-2 h2">
          Your Favourite Videos{' '}
          <span role="img" aria-label="In Love Emoji">
            😍
          </span>
        </span>
      </span>
      {favouriteVideos.length < 1 && (
        <div className="mt-5">
          <h4>
            You don't have any favourite videos yet! Start by searching above...
          </h4>
        </div>
      )}
      <VideoList
        videos={favouriteVideos}
        setFavouriteVideos={setFavouriteVideos}
        favouriteVideos={favouriteVideos}
      />
    </div>
  );
};

export default FavouriteVideos;
