"use client";

import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export function WeatherWidget() {
  const [weather, setWeather] = useState<{ alert: boolean; location: string; condition: string } | null>(null);
  
  // Only randomize on client to avoid SSR hydration mismatch
  useEffect(() => {
    const locations = ["Miami-Dade", "Broward", "Palm Beach", "Orlando", "Tampa"];
    const conditions = ["Heavy Rain Expected", "Storm Alert", "High Humidity Warning", "Flood Risk Elevated"];
    setWeather({
      alert: true,
      location: locations[Math.floor(Math.random() * locations.length)],
      condition: conditions[Math.floor(Math.random() * conditions.length)]
    });
  }, []);

  if (!weather || !weather.alert) return null;

  return (
    <div className="bg-gradient-amber text-neutral-text py-2 px-4 text-center text-sm font-medium animate-float">
      <span className="flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 animate-pulse" />
        ⚠️ {weather.condition} in {weather.location} • 
        <button className="underline font-bold hover:text-neutral-text/80 transition">Get Priority Response →</button>
      </span>
    </div>
  );
}
