"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, Thermometer, Droplets, Home } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // GSAP: wiggle the slider handle on enter
  useEffect(() => {
    if (!sliderRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.from(sliderRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#1A1A2E]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] dark:text-white mb-4">
          See the Difference Technology Makes
        </h2>
        <p className="text-[#6B7280] dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Our thermal imaging detects hidden moisture and mold that the naked
          eye misses. Drag the slider to compare.
        </p>

        {/* Interactive Slider */}
        <div
          ref={sliderRef}
          className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border-2 border-[#A3E4D7]/40 shadow-2xl"
        >
          {/* After (clean) */}
          <div className="aspect-video bg-gradient-to-br from-[#A3E4D7] to-white flex items-center justify-center">
            <div className="text-center p-6">
              <CheckCircle className="w-20 h-20 text-[#2ECC71] mx-auto mb-4" />
              <h4 className="font-bold text-xl text-[#1A1A2E]">
                After Remediation
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                100% Mold-Free Guarantee
              </p>
            </div>
          </div>

          {/* Before (mold) overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#FFB300]/25 to-[#FFB300]/5 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="text-center p-6">
              <AlertTriangle className="w-20 h-20 text-[#FFB300] mx-auto mb-4" />
              <h4 className="font-bold text-xl text-[#1A1A2E]">
                Before: Hidden Mold
              </h4>
              <p className="text-[#6B7280] text-sm mt-1">
                Detected with Thermal Imaging
              </p>
            </div>
          </div>

          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
            aria-label="Slide to compare before and after"
          />

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg pointer-events-none z-20"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-sm font-bold text-[#1A1A2E] border-2 border-[#2ECC71]">
              ↔️
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-xs text-[#6B7280] py-3 bg-white/90 dark:bg-[#1A1A2E]/90">
            👈 Drag slider to see the difference our thermal inspection makes
          </p>
        </div>

        {/* Tech badges below */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#6B7280]">
          <span className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-[#2ECC71]" />
            Thermal Imaging Technology
          </span>
          <span className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-[#2ECC71]" />
            Moisture Detection
          </span>
          <span className="flex items-center gap-2">
            <Home className="w-4 h-4 text-[#2ECC71]" />
            Non-Invasive Inspection
          </span>
        </div>
      </div>
    </section>
  );
}
