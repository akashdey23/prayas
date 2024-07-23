import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="What are you looking for ?"
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && ( 
          <button type="button" onClick={handleClear} className="clear-btn">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
