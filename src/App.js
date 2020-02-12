import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NProgress from 'nprogress';

import youtube from './api/youtube';
import { SearchBar, Header, Results, Home } from './components';
import FavouriteVideos from './components/FavouriteVideos';

const useComponentDidMount = func => useEffect(func, []);

const useComponentWillMount = func => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  useComponentDidMount(() => {
    willMount.current = false;
  });
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [favouriteVideos, setFavouriteVideos] = useState(
    JSON.parse(localStorage.getItem('favouriteVideos')) || []
  );

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useComponentWillMount(() =>
    // console.log('Runs only once before component mounts')
    NProgress.start()
  );
  useComponentDidMount(() =>
    // console.log('Runs only once after component mounts')
    NProgress.done()
  );

  const handleSubmit = async searchTerm => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
    forceUpdate();
  }, [favouriteVideos, forceUpdate]);

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
              handleSubmit={handleSubmit}
            />
          )}
        />

        {/* Results */}
        {redirect && <Redirect to="/results" />}
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
