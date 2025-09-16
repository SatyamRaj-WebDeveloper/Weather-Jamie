import { AlertTriangle } from "lucide-react";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center gap-2 text-red-300 bg-white/10 p-3 rounded-lg">
      <AlertTriangle size={20} /> {message}
    </div>
  );
}
