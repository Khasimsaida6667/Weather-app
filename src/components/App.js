import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import ToggleTheme from './ToggleTheme';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const fetchWeatherData = async (location) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.xml?key=270e529e4843403ab57184646241506&q=${location}`);
      const data = await response.text();

      if (response.ok) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const locationElement = xmlDoc.querySelector('location');
        const currentElement = xmlDoc.querySelector('current');

        if (locationElement && currentElement) {
          const weatherInfo = {
            location: {
              name: locationElement.querySelector('name').textContent,
              region: locationElement.querySelector('region').textContent,
              localtime: locationElement.querySelector('localtime').textContent,
            },
            current: {
              temp_c: currentElement.querySelector('temp_c').textContent,
              condition: {
                text: currentElement.querySelector('condition > text').textContent,
                icon: currentElement.querySelector('condition > icon').textContent,
              },
              wind_kph: currentElement.querySelector('wind_kph').textContent,
              humidity: currentElement.querySelector('humidity').textContent,
            },
          };

          setWeatherData(weatherInfo);
        } else {
          setError('Invalid location. Please try again.');
        }
      } else {
        setError('An error occurred while fetching weather data.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className={`app ${theme}`}>
      <SearchBar onLocationChange={handleLocationChange} theme={theme} />
      <ToggleTheme toggleTheme={toggleTheme} theme={theme} />
      {isLoading ? (
        <Loader theme={theme} />
      ) : error ? (
        <ErrorMessage message={error} theme={theme} />
      ) : (
        weatherData && <WeatherCard weatherData={weatherData} theme={theme} />
      )}
    </div>
  );
};

export default App;