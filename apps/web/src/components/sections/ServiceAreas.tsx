"use client";

import { MapPin } from "lucide-react";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

const areas = [
  { name: "Miami-Dade", cities: "Miami, Doral, Hialeah, Homestead, Kendall" },
  { name: "Broward", cities: "Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs" },
  { name: "Palm Beach", cities: "West Palm Beach, Boca Raton, Delray Beach, Boynton Beach" },
  { name: "Orlando", cities: "Orlando, Kissimmee, Sanford, Winter Park" },
  { name: "Tampa Bay", cities: "Tampa, St. Petersburg, Clearwater, Brandon" },
  { name: "Statewide", cities: "Available for large-scale commercial projects" },
];

export function ServiceAreas() {
  const ref = useGSAPReveal({ type: "stagger", staggerAmount: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#1B5E20] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23fff%22 fill-opacity=%220.2%22%3E%3Cpath d=%22M20 20.5V18H0v-2h20v-2l2 3-2 3zM0 20.5V18h20v-2H0v-2l-2 3 2 3z%22/%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Serving All of Florida
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            With technicians positioned across the state, we guarantee rapid response
            no matter where you are.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <div
              key={area.name}
              className="flex items-start gap-3 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-bold text-white text-base">{area.name}</h4>
                <p className="text-white/60 text-sm mt-1">{area.cities}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/60 text-sm">
            Don&apos;t see your area? Call us — we likely serve your location too.
          </p>
          <a
            href="tel:+13055551234"
            className="inline-flex items-center gap-2 mt-4 px-8 py-3 text-sm font-bold text-[#1B5E20] bg-white rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase"
          >
            <MapPin className="w-4 h-4" />
            Check Your Area →
          </a>
        </div>
      </div>
    </section>
  );
}
