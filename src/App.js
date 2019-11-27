import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, VideoDetails, VideoList } from './components';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        // use ENV to store api key elsewhere
        key: 'AIzaSyB833-_A8slGTcVAvrFLBo421ykIE03zuk',
        q: searchTerm
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => handleSubmit('dogs'), []);

  return (
    <Grid container spacing={10} justify="center">
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
