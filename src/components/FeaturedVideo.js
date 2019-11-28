import React from 'react';
// import Loading from '../assets/loading.svg';

// import { Paper, Typography } from '@material-ui/core';

const FeaturedVideo = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <h1 className="sass-test">Sass test</h1>
      {/* <img src={Loading} alt="" /> */}
      {/* <Paper elevation={6} style={{ height: '70%' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowfullscreen="0"
        />
      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper> */}
    </React.Fragment>
  );
};

export default FeaturedVideo;
