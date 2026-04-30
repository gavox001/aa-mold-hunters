"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    title: "Protect Your Health",
    description:
      "Mold can trigger allergies and respiratory issues. A timely inspection ensures a healthy living environment for you and your family.",
  },
  {
    title: "Prevent Property Damage",
    description:
      "Mold can damage your home's structure and belongings. Detecting it early can save you thousands in potential repairs.",
  },
  {
    title: "South Florida's Ideal Mold Habitat",
    description:
      "If your home was recently in the path of a natural disaster or even endured extreme rains, your home is at risk.",
  },
  {
    title: "Real Estate Value",
    description:
      "Whether selling or buying, understanding whether or not your property has a mold issue is crucial. A clean inspection report can add value.",
  },
  {
    title: "Insurance Compliance",
    description:
      "Many insurance policies require regular mold inspections. Stay compliant and ensure coverage by scheduling your inspection promptly.",
  },
  {
    title: "Peace of Mind",
    description:
      "Don't wait for visible signs. A mold inspection provides peace of mind, knowing you're proactively taking control of your indoor air quality.",
  },
];

export function WhyYouNeed() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
            [ Risk Awareness ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight max-w-3xl">
            Why Early Mold Detection Matters
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 bg-secondary p-6 rounded-2xl shadow-sm border border-border/50 hover:border-border transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg shadow-accent/20">
            Apply for your FREE Inspection
          </Button>
        </div>
      </div>
    </section>
  );
}
