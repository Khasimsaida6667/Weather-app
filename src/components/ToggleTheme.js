
import React from 'react';
import './ToggleTheme.css';

const ToggleTheme = ({ toggleTheme, theme }) => {
  return (
    <div className={`toggle-theme ${theme}`}>
      <input
        type="checkbox"
        id="toggle-theme"
        className="toggle-theme-checkbox"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle-theme" className="toggle-theme-label">
        <span className="toggle-theme-ball" />
      </label>
    </div>
  );
};

export default ToggleTheme;
