import { ProcessStep } from "../ui/ProcessStep";
import { PrimaryCTA } from "../ui/PrimaryCTA";

export function Process() {
  return (
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
  );
}
