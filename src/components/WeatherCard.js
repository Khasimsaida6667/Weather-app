
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData, theme }) => {
  const { location, current } = weatherData;

  return (
    <div className={`weather-card ${theme}`}>
      <h2 className="location">{location.name}, {location.region}</h2>
      <div className="temperature">
        <span className="temp">{current.temp_c}°C</span>
        <div className="condition">
          <img src={current.condition.icon} alt={current.condition.text} className="condition-icon" />
          <span>{current.condition.text}</span>
        </div>
      </div>
      <div className="additional-info">
        <p>Wind: {current.wind_kph} kph</p>
        <p>Humidity: {current.humidity}%</p>
      </div>
      <div className="time">
        <p>{location.localtime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;