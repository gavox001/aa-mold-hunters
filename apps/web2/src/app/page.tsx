import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { BeforeAfterSlider } from "../components/sections/BeforeAfterSlider";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { CostCalculator } from "../components/sections/CostCalculator";
import { FAQ } from "../components/sections/FAQ";
import { Footer } from "../components/sections/Footer";
import { PrimaryCTA } from "../components/ui/PrimaryCTA";
import { Shield, Phone, Thermometer, Droplets, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <Services />
      
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
              <HomeIcon className="w-4 h-4 text-eco-primary" />
              Non-Invasive Inspection
            </span>
          </div>
        </div>
      </section>

      <Process />
      
      <Testimonials />
      
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
      
      <FAQ />

      {/* 🎯 FINAL CTA SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-urgency mb-6 mx-auto inline-flex items-center gap-2 px-4 py-2 bg-amber-urgent/10 text-amber-urgent font-bold rounded-full border border-amber-urgent/30">
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
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-cta border-2 border-amber-urgent text-white font-bold animate-pulse-urgent"
          >
            FREE Inspection
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
