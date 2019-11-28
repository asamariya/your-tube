import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openClass, setOpenClass] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(searchTerm);
    setOpenClass(false);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div id="search-bar">
        <form onSubmit={handleSubmit}>
          <i class="fas fa-search fa-2x mr-2"></i>
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
