"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Book in 30 Seconds",
    desc: "Call or fill out our quick form. No pressure, no obligation.",
  },
  {
    number: "02",
    icon: "📡",
    title: "FREE Thermal Inspection",
    desc: "Certified tech uses thermal camera to find hidden moisture in 45 min.",
  },
  {
    number: "03",
    icon: "✅",
    title: "Get Your Action Plan",
    desc: "Clear pricing, insurance guidance, and work starts today if you choose.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the connecting line drawing
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Stagger the cards
      const cards = cardsRef.current!.children;
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-16 sm:py-20 lg:py-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
            [ How It Works ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight max-w-3xl">
            Our 3-Step Action Plan
          </h2>
        </div>

        {/* Steps Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="process-step relative z-10 flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="w-24 h-24 rounded-full bg-background border-4 border-accent flex items-center justify-center shadow-lg shadow-accent/10 mb-6">
                <span className="text-3xl">{step.icon}</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
