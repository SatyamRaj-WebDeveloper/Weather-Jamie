import { motion } from "framer-motion";
import { Sun, CloudRain, Wind } from "lucide-react";

export default function WeatherCard({ weather }) {
  const weatherIcon = weather.weathercode < 3 ? <Sun /> : <CloudRain />;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 rounded-2xl p-6 text-center text-white shadow-lg border border-white/20"
    >
      <div className="flex justify-center mb-4 text-yellow-300">{weatherIcon}</div>
      <h2 className="text-2xl font-semibold">{weather.city}</h2>
      <p className="text-5xl font-bold my-2">{weather.temperature}°C</p>
      <div className="flex justify-center items-center gap-2 text-sm text-white/80">
        <Wind size={18} /> {weather.windspeed} km/h wind
      </div>
    </motion.div>
  );
}
