// components/SearchBar.jsx
import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const [debounced, setDebounced] = useState('');

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), 600);
    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (debounced.trim()) onSearch(debounced.trim());
  }, [debounced, onSearch]);

  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter city name..."
        className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
