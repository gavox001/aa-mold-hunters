"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { WeatherWidget } from "./WeatherWidget";

const navLinks = [
  { id: "services", label: "Services" },
  { id: "process", label: "How It Works" },
  { id: "reviews", label: "Reviews" },
  { id: "calculator", label: "Cost Calculator" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <WeatherWidget />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-neutral-bg/95 backdrop-blur-sm shadow-lg border-b border-eco-primary-light/30" : "bg-transparent mt-10"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center font-bold text-white shadow-eco-glow">
              AA
            </div>
            <span className="font-bold text-neutral-text hidden sm:block">Mold Hunters</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-neutral-text hover:text-eco-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* CTA + Phone */}
          <div className="flex items-center gap-3">
            <a href="tel:+13055551234" className="hidden sm:flex items-center gap-2 text-sm font-bold text-eco-primary-dark hover:text-eco-primary transition">
              <Phone className="w-4 h-4" />
              (305) 555-1234
            </a>
            <button 
              onClick={() => scrollToSection("quote-form")}
              className="px-6 py-2 bg-gradient-cta text-white text-sm font-bold rounded-xl hover:shadow-eco-glow transform hover:-translate-y-1 transition-all duration-300 hidden sm:block"
            >
              FREE Inspection
            </button>
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-neutral-text hover:bg-neutral-muted/10 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-eco-primary-light/30 px-4 py-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-neutral-text hover:text-eco-primary transition"
              >
                {link.label}
              </button>
            ))}
            <a href="tel:+13055551234" className="flex items-center gap-2 py-2 text-eco-primary-dark font-bold">
              <Phone className="w-4 h-4" />
              (305) 555-1234
            </a>
            <button 
              onClick={() => scrollToSection("quote-form")}
              className="btn-cta-primary w-full py-3"
            >
              Claim FREE Inspection
            </button>
          </div>
        )}
      </header>
    </>
  );
}
