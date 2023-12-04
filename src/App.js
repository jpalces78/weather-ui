import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://weather-api-bphnvs2tva-uc.a.run.app/weather?city=${city}`);
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('Error fetching weather data.');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={fetchWeatherData}>Get Weather</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more weather information as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;