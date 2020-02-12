import React, { useState, useEffect } from 'react';

import Loading from '../assets/loading.svg';
import VideoList from './VideoList';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    '0': '#FE07E5',
    '1.0': '#7466D7'
  },
  shadowBlur: 5
});

export const Results = ({ videos, setFavouriteVideos, favouriteVideos }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {!videos && <img src={Loading} alt="Loading" />}
      {loading && <TopBarProgress />}
      <div className="container videos">
        <span className="relative highlight highlight-pink">
          <span className="relative z-2 h2">Results</span>
        </span>
        <VideoList
          videos={videos}
          setFavouriteVideos={setFavouriteVideos}
          favouriteVideos={favouriteVideos}
        />
      </div>
    </React.Fragment>
  );
};

export default Results;
