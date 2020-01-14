import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header d-flex flex-wrap mb-4 mx-3">
      <div className="logo">
        <a href="/">
          <span className="relative highlight highlight-aqua">
            <h1 className="relative z-2">YourTube</h1>
          </span>
        </a>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/fav-videos">+ Your Favourite Videos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
