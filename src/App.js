import React, { useState, useEffect } from 'react';
import ls from 'local-storage';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, FeaturedVideo, VideoList, Logo } from './components';
import FavouriteVideos from './components/FavouriteVideos';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [favouriteVideos, setFavouriteVideos] = useState(
    ls.get('favouriteVideos') || []
  );

  const handleSubmit = async searchTerm => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        q: searchTerm,
        type: 'video'
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    console.log(response.data.items[0]);
  };

  useEffect(() => {
    // handleSubmit('dogs');
    ls.set('favouriteVideos', favouriteVideos);
  }, [favouriteVideos]);

  return (
    <React.Fragment>
      <Logo />
      <SearchBar onFormSubmit={handleSubmit} />
    </React.Fragment>
    // <Grid container spacing={10} justify="center">
    //   <Grid item xs={12}>
    //     <Grid container spacing={10}>
    //       <Grid item xs={12}>
    //         <SearchBar onFormSubmit={handleSubmit} />
    //       </Grid>
    //       <Grid item xs={8}>
    //         <FeaturedVideo video={selectedVideo} />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <VideoList
    //           videos={videos}
    //           onVideoSelect={setSelectedVideo}
    //           setFavouriteVideos={setFavouriteVideos}
    //           favouriteVideos={favouriteVideos}
    //         />
    //       </Grid>
    //       <Grid item xs={12}>
    //         <FavouriteVideos favouriteVideos={favouriteVideos} />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default App;
