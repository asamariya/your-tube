import React from 'react';
import VideoList from './VideoList';

const FavouriteVideos = ({ favouriteVideos, setFavouriteVideos }) => {
  return (
    <div className="container videos">
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
