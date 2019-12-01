import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ls from 'local-storage';

import youtube from './api/youtube';
import { SearchBar, Header, Results, Home } from './components';
import FavouriteVideos from './components/FavouriteVideos';

const App = () => {
  // ls.clear();
  const [videos, setVideos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [favouriteVideos, setFavouriteVideos] = useState(
    ls.get('favouriteVideos') || []
  );

  const handleSubmit = async searchTerm => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: API_KEY,
        q: searchTerm,
        type: 'video'
      }
    });
    setVideos(response.data.items);
    // console.log(response.data.items[0]);
  };

  useEffect(() => {
    handleSubmit('a pigeon sat on a branch reflecting on existence');
  }, []);

  useEffect(() => {
    ls.set('favouriteVideos', favouriteVideos);
  }, [favouriteVideos]);

  return (
    <Router>
      <React.Fragment>
        {/* Header */}
        <Header />
        {/* Search bar */}
        <SearchBar onFormSubmit={handleSubmit} setRedirect={setRedirect} />
        {/* Home */}
        <Route
          exact
          path="/"
          render={() => (
            <Home
              videos={videos}
              setFavouriteVideos={setFavouriteVideos}
              favouriteVideos={favouriteVideos}
            />
          )}
        />
        {/* Results */}
        {videos && redirect && <Redirect to="/results" />}
        <Route
          exact
          path="/results"
          render={() => (
            <Results
              videos={videos}
              setFavouriteVideos={setFavouriteVideos}
              favouriteVideos={favouriteVideos}
            />
          )}
        />
        {/* Favourite Videos */}
        <Route
          exact
          path="/fav-videos"
          render={() => (
            <FavouriteVideos
              favouriteVideos={favouriteVideos}
              setFavouriteVideos={setFavouriteVideos}
            />
          )}
        />
      </React.Fragment>
    </Router>
  );
};

export default App;
