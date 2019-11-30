import React from 'react';

import Loading from '../assets/loading.svg';
import VideoList from './VideoList';

export const Results = ({ videos, setFavouriteVideos, favouriteVideos }) => {
  return (
    <React.Fragment>
      {!videos && <img src={Loading} alt="Loading" />}
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
