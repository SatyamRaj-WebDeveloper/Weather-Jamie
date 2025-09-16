import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useFetchWeather } from "../hooks/UseFetchWeather.js";

export default function Home() {
  const { weather, loading, error, fetchWeather } = useFetchWeather();

  return (
    <div>
      <SearchBar onSearch={fetchWeather} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
