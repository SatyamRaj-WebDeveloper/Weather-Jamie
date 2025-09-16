import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center bg-white/20 rounded-full p-2 mb-6 shadow-inner border border-white/30"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a city..."
        className="flex-1 bg-transparent text-white placeholder-white/70 focus:outline-none px-4"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-3 text-white hover:opacity-90 transition"
      >
        <Search size={20} />
      </button>
    </motion.form>
  );
}
