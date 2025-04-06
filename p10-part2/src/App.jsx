import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API key from OpenWeatherMap
  const API_KEY = '53243b1ae047dd7477b120dfea866cba';

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!search) return;

      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('City not found or network error');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [search]); // Only re-run when search changes

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="weather-container">
        {loading && <p>Loading...</p>}
        
        {error && <p className="error">{error}</p>}
        
        {weather && (
          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <div className="weather-details">
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description} 
              />
              <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="additional-info">
              <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
