
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onLocationChange, theme }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onLocationChange(inputValue);
  };

  return (
    <div className={`search-bar ${theme}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter city name or zip code"
        className={`search-input ${theme}`}
      />
      <button onClick={handleSearch} className={`search-button ${theme}`}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;