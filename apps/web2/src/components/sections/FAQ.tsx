"use client";

import { FAQItem } from "../ui/FAQItem";

const faqs = [
  { q: "Is the inspection really free?", a: "Yes! Our thermal inspection is 100% free with no obligation. We only get paid if you choose to proceed with remediation services." },
  { q: "How quickly can you respond?", a: "We guarantee a 1-hour response time for emergencies in Miami-Dade, Broward, and Palm Beach counties. Other areas: 2-4 hours." },
  { q: "Do you work with insurance?", a: "Yes! We're approved by all major Florida insurers. Our team handles all paperwork and communicates directly with your adjuster." },
  { q: "What if mold comes back?", a: "We offer a 100% satisfaction guarantee. If mold returns in the treated area within 12 months, we re-treat at no cost to you." },
  { q: "Are your technicians certified?", a: "All our technicians are IICRC-certified, background-checked, and trained in the latest mold remediation protocols." },
];

export function FAQ() {
  return (
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
  );
}
