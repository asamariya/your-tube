import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({
  video,
  onVideoSelect,
  setFavouriteVideos,
  favouriteVideos
}) => {
  const addFavourite = video => {
    setFavouriteVideos(favouriteVideos => favouriteVideos.concat(video));
  };

  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
          style={{ marginRight: '20px' }}
        />
        <span
          style={{
            height: '24px',
            width: '24px',
            borderRadius: '50%',
            backgroundColor: 'green',
            cursor: 'pointer'
          }}
          onClick={() => addFavourite(video)}
        ></span>
        <Typography variant="subtitle1">
          {/* <strong>{video.snippet.title}</strong> */}
          <strong>
            <span role="img" aria-label="Point left">
              👈🏼
            </span>
            Add as favourite
          </strong>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
