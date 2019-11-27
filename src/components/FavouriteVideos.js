import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const FavouriteVideos = ({ favouriteVideos }) => {
  const listOfFavVideos = favouriteVideos.map((video, id) => (
    <VideoItem key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      <h1>Favourite Videos:</h1>
      {listOfFavVideos}
    </Grid>
  );
};

export default FavouriteVideos;
