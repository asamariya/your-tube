import React from 'react';
import VideoItem from './VideoItem';

const FavouriteVideos = ({ favouriteVideos, setSelectedVideo }) => {
  const listOfFavVideos = favouriteVideos.map((video, id) => (
    <VideoItem key={id} video={video} setSelectedVideo={setSelectedVideo} />
  ));
  return (
    <div className="container fav-videos">
      <span className="relative highlight highlight-pink">
        <span className="relative z-2 h2">
          Your Favourite Videos{' '}
          <span role="img" aria-label="In Love Emoji">
            😍
          </span>
        </span>
      </span>
      <div className="video-list mt-4">{listOfFavVideos}</div>
    </div>
  );
};

export default FavouriteVideos;
