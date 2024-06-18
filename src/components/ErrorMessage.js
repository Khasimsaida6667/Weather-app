
import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, theme }) => {
  return (
    <div className={`error-message ${theme}`}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;