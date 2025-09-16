// hooks/useFetchWeather.js
import { useState } from 'react';
import { getCoordinates } from '../utils/geocoding';

export function useFetchWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      setWeather(null);

      const { latitude, longitude, name, country } = await getCoordinates(city);

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      setWeather({
        city: `${name}, ${country}`,
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}
