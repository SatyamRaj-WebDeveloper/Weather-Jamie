// utils/geocoding.js
export async function getCoordinates(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );
  if (!res.ok) throw new Error('Failed to fetch coordinates');
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error('City not found');
  const { latitude, longitude, name, country } = data.results[0];
  return { latitude, longitude, name, country };
}
