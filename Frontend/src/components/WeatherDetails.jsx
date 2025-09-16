// components/WeatherDetails.jsx
export default function WeatherDetails({ windspeed }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4 text-center">
      <p className="text-gray-700">💨 Wind Speed: {windspeed} km/h</p>
    </div>
  );
}
