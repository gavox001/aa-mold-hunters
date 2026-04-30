"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, ChevronRight } from "lucide-react";
import Link from "next/link";

export function WeatherWidget() {
  const [weather, setWeather] = useState<{
    alert: boolean;
    location: string;
    condition: string;
  } | null>(null);

  useEffect(() => {
    // In production, this would connect to a real weather/humidity API
    const locations = ["Miami-Dade", "Broward", "Palm Beach", "South Florida"];
    const conditions = [
      "High humidity reported",
      "Recent heavy rains",
      "Elevated mold risk conditions",
      "Post-storm moisture warnings",
    ];
    setWeather({
      alert: true,
      location: locations[Math.floor(Math.random() * locations.length)],
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    });
  }, []);

  if (!weather || !weather.alert) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-9 sm:h-10 bg-primary text-primary-foreground border-b border-white/10 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-sm font-medium tracking-wide whitespace-nowrap">
        <span className="flex min-w-0 items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-muted-foreground">{weather.location}:</span>
          <span className="font-semibold text-white truncate max-w-[46vw] sm:max-w-none">
            {weather.condition}
          </span>
        </span>
        <span className="hidden sm:inline text-muted-foreground/50">•</span>
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 text-accent hover:text-white transition-colors group"
        >
          Check your home's risk level
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
