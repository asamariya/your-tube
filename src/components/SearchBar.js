import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, setRedirect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(searchTerm);
    setRedirect(true);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mb-5">
      <div id="search-bar">
        <form onSubmit={handleSubmit}>
          <i className="fas fa-search fa-2x mr-2"></i>
          <input
            type="search"
            className="search-input"
            placeholder="Search..."
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
