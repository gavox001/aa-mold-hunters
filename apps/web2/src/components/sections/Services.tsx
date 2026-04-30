import { ServiceCard } from "../ui/ServiceCard";

const services = [
  { icon: "💧", title: "Water Damage Mitigation", desc: "Stop water damage in 4 hours or less. Emergency tarping & extraction.", cta: "Emergency Service →" },
  { icon: "🍄", title: "Mold Remediation", desc: "100% removal guarantee. Thermal imaging finds hidden growth.", cta: "View Mold Services →" },
  { icon: "🏠", title: "Roof Leak Repair", desc: "Prevent storm damage. Fast tarping & permanent repairs.", cta: "Protect Your Roof →" },
  { icon: "🔬", title: "Air Quality Testing", desc: "Certified lab analysis. Know exactly what's in your air.", cta: "Test Your Air →" },
  { icon: "🧹", title: "Sanitization & Deodorizing", desc: "Eliminate odors & contaminants. Safe for kids & pets.", cta: "Fresh Start →" },
  { icon: "📋", title: "Insurance Claim Support", desc: "We handle paperwork. 98% approval rate with major insurers.", cta: "Get Help →" },
];

export function Services() {
  return (
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
  );
}
