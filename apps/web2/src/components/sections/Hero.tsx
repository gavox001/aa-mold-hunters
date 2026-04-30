"use client";

import { UrgencyBadge } from "../ui/UrgencyBadge";
import { PrimaryCTA } from "../ui/PrimaryCTA";
import { SecondaryCTA } from "../ui/SecondaryCTA";
import { ScarcityProgress } from "../ui/ScarcityProgress";
import { TrustBadges } from "../ui/TrustBadges";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center px-4 py-24 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%232ECC71%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10 animate-fade-in-up">
        <UrgencyBadge slots={3} />
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-eco-primary">Hidden Mold</span> is Destroying Your Home<br />
          <span className="text-amber-urgent">FREE Thermal Inspection</span> Reveals It in 24 Hours
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-muted mb-10 max-w-2xl mx-auto">
          Serving Florida Homeowners • 24/7 Emergency Response • 100% Insurance Approved
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <PrimaryCTA />
          <SecondaryCTA />
        </div>
        
        <ScarcityProgress booked={7} total={10} />
        
        <TrustBadges />
      </div>
      
      <button 
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-muted hover:text-eco-primary transition"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
