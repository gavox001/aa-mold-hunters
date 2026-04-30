// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Shield, Star, CheckCircle, AlertTriangle, Thermometer, Droplets, Home, ChevronDown, ChevronUp, Menu, X } from "lucide-react";

// ========================================
// 🎯 COMPONENTES REUTILIZABLES (Inline)
// ========================================

// Badge de urgencia con animación (PRO TIP integrado)
function UrgencyBadge({ slots = 3 }: { slots?: number }) {
  return (
    <div className="flex justify-center mb-6 animate-fade-in">
      <span className="badge-urgency">
        <span className="animate-pulse text-lg">🔥</span>
        Only {slots} FREE inspections left this week
      </span>
    </div>
  );
}

// CTA Principal con animación de urgencia automática
function PrimaryCTA({ text = "🎯 Claim Your FREE Inspection Now", href = "#quote-form" }: { text?: string; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleClick}
      className="btn-cta-primary group"
      aria-label={text}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}

// CTA Secundario
function SecondaryCTA({ text = "See if you qualify →", href = "#services" }: { text?: string; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleClick}
      className="px-6 py-4 rounded-xl font-semibold bg-white text-eco-primary-dark border-2 border-eco-primary-light 
                 hover:border-eco-primary hover:bg-eco-primary-light/30 transition-all duration-200 
                 focus:outline-none focus:ring-4 focus:ring-eco-primary/30 active:scale-95"
    >
      {text}
    </button>
  );
}

// Barra de progreso de escasez
function ScarcityProgress({ booked = 7, total = 10 }: { booked?: number; total?: number }) {
  const percentage = (booked / total) * 100;
  
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm mb-2 text-neutral-muted">
        <span>Slots remaining today</span>
        <span className="font-bold text-amber-urgent">{total - booked} of {total}</span>
      </div>
      <div className="progress-urgency">
        <div className="progress-urgency-fill" style={{ width: `${percentage}%` }} />
      </div>
      <p className="text-xs text-neutral-muted mt-2 flex items-center gap-1">
        <Clock className="w-3 h-3" />
        Updated 2 minutes ago • High demand in your area
      </p>
    </div>
  );
}

// Trust Badges
function TrustBadges() {
  const badges = [
    { icon: Star, text: "4.9/5 (2,300+ Reviews)", color: "text-amber-urgent" },
    { icon: Shield, text: "Licensed & Insured", color: "text-eco-primary" },
    { icon: Clock, text: "24/7 Emergency Response", color: "text-eco-primary" },
    { icon: CheckCircle, text: "100% Insurance Claims Approved", color: "text-eco-primary" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-6 border-y border-eco-primary-light/30">
      {badges.map((badge, i) => (
        <span key={i} className="flex items-center gap-2 text-sm font-medium text-neutral-muted">
          <badge.icon className={`w-4 h-4 ${badge.color}`} />
          {badge.text}
        </span>
      ))}
    </div>
  );
}

// Weather Emergency Widget (Diferenciador único)
function WeatherWidget() {
  const [weather, setWeather] = useState({ alert: false, location: "Miami-Dade", condition: "Heavy Rain Expected" });
  
  // Simular datos dinámicos (en producción usar API real)
  useEffect(() => {
    const locations = ["Miami-Dade", "Broward", "Palm Beach", "Orlando", "Tampa"];
    const conditions = ["Heavy Rain Expected", "Storm Alert", "High Humidity Warning", "Flood Risk Elevated"];
    setWeather({
      alert: Math.random() > 0.3,
      location: locations[Math.floor(Math.random() * locations.length)],
      condition: conditions[Math.floor(Math.random() * conditions.length)]
    });
  }, []);

  if (!weather.alert) return null;

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

// Service Card
function ServiceCard({ icon, title, desc, cta }: { icon: string; title: string; desc: string; cta: string }) {
  return (
    <div className="card-service">
      <div className="card-icon mb-4 text-2xl">{icon}</div>
      <h3 className="text-lg font-bold text-neutral-text mb-2">{title}</h3>
      <p className="text-neutral-muted mb-4 text-sm">{desc}</p>
      <button className="btn-cta-text group">
        {cta}
        <ChevronDown className="w-4 h-4 inline group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  );
}

// Before/After Slider Simple
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border-2 border-eco-primary-light/40">
      {/* After Image (visible por defecto) */}
      <div className="aspect-video bg-gradient-to-br from-eco-primary-light to-white flex items-center justify-center">
        <div className="text-center p-6">
          <CheckCircle className="w-16 h-16 text-eco-primary mx-auto mb-4" />
          <h4 className="font-bold text-lg text-neutral-text">After Remediation</h4>
          <p className="text-neutral-muted text-sm">100% Mold-Free Guarantee</p>
        </div>
      </div>
      
      {/* Before Image (overlay) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-urgent/20 to-amber-urgent/5 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center p-6">
          <AlertTriangle className="w-16 h-16 text-amber-urgent mx-auto mb-4" />
          <h4 className="font-bold text-lg text-neutral-text">Before: Hidden Mold</h4>
          <p className="text-neutral-muted text-sm">Detected with Thermal Imaging</p>
        </div>
      </div>
      
      {/* Slider Handle */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Slide to compare before and after"
      />
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-xs font-bold text-neutral-text">
          ↔️
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-center text-xs text-neutral-muted py-3 bg-white/80">
        👈 Drag slider to see the difference our thermal inspection makes
      </p>
    </div>
  );
}

// Process Step
function ProcessStep({ number, title, desc, icon }: { number: string; title: string; desc: string; icon: string }) {
  return (
    <div className="relative flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center text-2xl font-bold text-neutral-text mb-4 shadow-eco-glow">
        {icon}
      </div>
      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-urgent text-neutral-text text-sm font-bold flex items-center justify-center shadow-amber-glow">
        {number}
      </span>
      <h4 className="font-bold text-neutral-text mb-2">{title}</h4>
      <p className="text-neutral-muted text-sm">{desc}</p>
    </div>
  );
}

// Testimonial Card
function TestimonialCard({ name, location, rating, text, verified }: { 
  name: string; location: string; rating: number; text: string; verified: boolean 
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-eco-primary-light/30 hover:border-eco-primary hover:shadow-eco-glow transition-all duration-300">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-amber-urgent fill-amber-urgent" : "text-neutral-muted"}`} />
        ))}
      </div>
      <p className="text-neutral-text mb-4 text-sm leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-eco-primary-light flex items-center justify-center font-bold text-eco-primary-dark">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-neutral-text text-sm">{name}</p>
          <p className="text-neutral-muted text-xs flex items-center gap-1">
            {location}
            {verified && <CheckCircle className="w-3 h-3 text-eco-primary" />}
          </p>
        </div>
      </div>
    </div>
  );
}

// FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-eco-primary-light/30 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-eco-primary/30 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-text pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-eco-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-muted flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-neutral-muted text-sm leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

// Cost Calculator Interactive
function CostCalculator() {
  const [days, setDays] = useState(3);
  const estimatedDamage = Math.floor(1200 + (days * 850) + Math.random() * 500);
  const potentialSavings = Math.floor(estimatedDamage * 0.8);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-eco-primary-light/40 shadow-eco-glow max-w-lg mx-auto">
      <h4 className="font-bold text-lg text-neutral-text mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-urgent" />
        Cost of Waiting Calculator
      </h4>
      
      <p className="text-neutral-muted text-sm mb-4">
        Every day you wait, mold spreads 2x faster. See what delaying could cost you:
      </p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-text mb-2">
          Days since you noticed mold: <span className="text-amber-urgent font-bold">{days}</span>
        </label>
        <input
          type="range"
          min="1"
          max="14"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full h-2 bg-neutral-muted/20 rounded-lg appearance-none cursor-pointer accent-amber-urgent"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-amber-urgent/10 rounded-xl p-4 text-center">
          <p className="text-xs text-neutral-muted uppercase tracking-wide">Estimated Damage</p>
          <p className="text-2xl font-bold text-amber-urgent">${estimatedDamage.toLocaleString()}</p>
        </div>
        <div className="bg-eco-primary-light/30 rounded-xl p-4 text-center">
          <p className="text-xs text-neutral-muted uppercase tracking-wide">Potential Savings</p>
          <p className="text-2xl font-bold text-eco-primary-dark">${potentialSavings.toLocaleString()}</p>
        </div>
      </div>
      
      <p className="text-xs text-neutral-muted mb-4 text-center">
        💡 A FREE inspection could identify the problem before costs escalate
      </p>
      
      <button className="btn-cta-primary w-full">
        Stop the Damage Now →
      </button>
    </div>
  );
}

// ========================================
// 🏠 PÁGINA PRINCIPAL
// ========================================

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll para anclas
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "process", label: "How It Works" },
    { id: "reviews", label: "Reviews" },
    { id: "calculator", label: "Cost Calculator" },
    { id: "faq", label: "FAQ" },
  ];

  const services = [
    { icon: "💧", title: "Water Damage Mitigation", desc: "Stop water damage in 4 hours or less. Emergency tarping & extraction.", cta: "Emergency Service →" },
    { icon: "🍄", title: "Mold Remediation", desc: "100% removal guarantee. Thermal imaging finds hidden growth.", cta: "View Mold Services →" },
    { icon: "🏠", title: "Roof Leak Repair", desc: "Prevent storm damage. Fast tarping & permanent repairs.", cta: "Protect Your Roof →" },
    { icon: "🔬", title: "Air Quality Testing", desc: "Certified lab analysis. Know exactly what's in your air.", cta: "Test Your Air →" },
    { icon: "🧹", title: "Sanitization & Deodorizing", desc: "Eliminate odors & contaminants. Safe for kids & pets.", cta: "Fresh Start →" },
    { icon: "📋", title: "Insurance Claim Support", desc: "We handle paperwork. 98% approval rate with major insurers.", cta: "Get Help →" },
  ];

  const testimonials = [
    { name: "Maria G.", location: "Miami, FL", rating: 5, text: "They found mold behind my wall that 2 other companies missed. Saved me $15k in structural damage.", verified: true },
    { name: "Robert T.", location: "Fort Lauderdale, FL", rating: 5, text: "Called at 2 AM during a storm. They were at my door in 45 minutes. True professionals.", verified: true },
    { name: "Jennifer L.", location: "West Palm Beach, FL", rating: 5, text: "The thermal inspection showed problems I couldn't see. Free inspection paid for itself 10x over.", verified: true },
  ];

  const faqs = [
    { q: "Is the inspection really free?", a: "Yes! Our thermal inspection is 100% free with no obligation. We only get paid if you choose to proceed with remediation services." },
    { q: "How quickly can you respond?", a: "We guarantee a 1-hour response time for emergencies in Miami-Dade, Broward, and Palm Beach counties. Other areas: 2-4 hours." },
    { q: "Do you work with insurance?", a: "Yes! We're approved by all major Florida insurers. Our team handles all paperwork and communicates directly with your adjuster." },
    { q: "What if mold comes back?", a: "We offer a 100% satisfaction guarantee. If mold returns in the treated area within 12 months, we re-treat at no cost to you." },
    { q: "Are your technicians certified?", a: "All our technicians are IICRC-certified, background-checked, and trained in the latest mold remediation protocols." },
  ];

  return (
    <main className="min-h-screen">
      
      {/* 🌩️ Weather Emergency Widget (Top Bar) */}
      <WeatherWidget />
      
      {/* 🧭 Header Sticky */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-neutral-bg/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center font-bold text-neutral-text shadow-eco-glow">
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
              className="btn-cta-primary px-4 py-2 text-sm hidden sm:block"
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

      {/* 🚀 HERO SECTION */}
      <section id="hero" className="hero-section min-h-screen flex items-center justify-center px-4 py-24 relative">
        {/* Pattern overlay sutil */}
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
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("services")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-muted hover:text-eco-primary transition"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* 💧 SERVICES SECTION */}
      <section id="services" className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Complete Mold & Water Damage Solutions
            </h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              From emergency response to final restoration, we handle every step with certified expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 🔬 BEFORE/AFTER SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
            See the Difference Technology Makes
          </h2>
          <p className="text-neutral-muted mb-10 max-w-2xl mx-auto">
            Our thermal imaging detects hidden moisture and mold that the naked eye misses. Drag the slider to compare.
          </p>
          
          <BeforeAfterSlider />
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-muted">
            <span className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-eco-primary" />
              Thermal Imaging Technology
            </span>
            <span className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-eco-primary" />
              Moisture Detection
            </span>
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4 text-eco-primary" />
              Non-Invasive Inspection
            </span>
          </div>
        </div>
      </section>

      {/* 🔄 PROCESS SECTION */}
      <section id="process" className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              How Your FREE Inspection Works
            </h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              Simple, fast, and zero obligation. Get answers in under an hour.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-eco-primary-light/50" />
            
            <ProcessStep 
              number="01"
              title="Book in 30 Seconds"
              desc="Call or fill out our quick form. No pressure, no obligation."
              icon="📞"
            />
            <ProcessStep 
              number="02"
              title="Thermal Inspection"
              desc="Certified tech uses thermal camera to find hidden moisture in 45 min."
              icon="📡"
            />
            <ProcessStep 
              number="03"
              title="Get Your Action Plan"
              desc="Clear pricing, insurance guidance, and work starts today if you choose."
              icon="✅"
            />
          </div>
          
          <div className="text-center mt-12">
            <PrimaryCTA text="Start Your FREE Inspection →" href="#quote-form" />
          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS SECTION */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-urgent fill-amber-urgent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Trusted by 2,300+ Florida Homeowners
            </h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              Real stories from neighbors who caught mold early and saved thousands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="btn-cta-text flex items-center justify-center gap-2 mx-auto">
              Read all 2,300+ reviews →
            </a>
          </div>
        </div>
      </section>

      {/* 💰 COST CALCULATOR SECTION */}
      <section id="calculator" className="py-20 px-4 bg-gradient-header">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What's Waiting Costing You?
          </h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto">
            Mold spreads exponentially. Use our calculator to see why acting now saves money.
          </p>
          
          <CostCalculator />
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section id="faq" className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-muted">
              Everything you need to know about our FREE inspection and remediation process.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-eco-primary-light/30 shadow-eco-glow">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-urgency mb-6 mx-auto">
            <span className="animate-pulse">⚡</span>
            Last slot for today - Book now to secure your FREE inspection
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6">
            Don't Let Hidden Mold Damage Your Home
          </h2>
          
          <p className="text-neutral-muted mb-10 max-w-2xl mx-auto">
            Join 2,300+ Florida homeowners who protected their biggest investment with our FREE thermal inspection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PrimaryCTA text="🔥 Claim Last FREE Slot Now" href="#quote-form" />
          </div>
          
          <p className="text-xs text-neutral-muted flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-eco-primary" />
            No obligation • 100% confidential • Cancel anytime
          </p>
        </div>
      </section>

      {/* 📞 STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-eco-primary-light/30 p-3 shadow-lg">
        <div className="flex gap-3">
          <a href="tel:+13055551234" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-eco-primary text-neutral-text font-bold hover:bg-eco-primary-hover transition">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button 
            onClick={() => scrollToSection("quote-form")}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-cta border-2 border-amber-urgent text-neutral-text font-bold animate-pulse-urgent"
          >
            FREE Inspection
          </button>
        </div>
      </div>

      {/* 🦶 FOOTER */}
      <footer className="bg-eco-primary-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">AA</div>
              <span className="font-bold">Mold Hunters</span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Florida's trusted mold remediation experts. Licensed, insured, and ready 24/7.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">in</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">★</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-eco-primary transition">Mold Remediation</a></li>
              <li><a href="#" className="hover:text-eco-primary transition">Water Damage</a></li>
              <li><a href="#" className="hover:text-eco-primary transition">Roof Leak Repair</a></li>
              <li><a href="#" className="hover:text-eco-primary transition">Air Quality Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Miami-Dade County</li>
              <li>Broward County</li>
              <li>Palm Beach County</li>
              <li>Orlando • Tampa • Statewide</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (305) 555-1234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Serving All Florida
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Emergency Response
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} AA Mold Hunters. Licensed & Insured • IICRC Certified • DBPR Registered</p>
          <p className="mt-2">
            <a href="#" className="hover:text-eco-primary transition">Privacy Policy</a> • 
            <a href="#" className="hover:text-eco-primary transition">Terms of Service</a>
          </p>
        </div>
      </footer>
    </main>
  );
}