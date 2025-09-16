// src/App.jsx
import { motion } from "framer-motion";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-xl p-8 w-full max-w-3xl border border-white/20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
          WeatherNow
        </h1>
        <Home />
      </motion.div>
    </div>
  );
}
