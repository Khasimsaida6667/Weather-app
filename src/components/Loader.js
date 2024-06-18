
import React from 'react';
import './Loader.css';

const Loader = ({ theme }) => {
  return (
    <div className="loader-container">
      <div className={`loader ${theme}`}></div>
    </div>
  );
};

export default Loader;