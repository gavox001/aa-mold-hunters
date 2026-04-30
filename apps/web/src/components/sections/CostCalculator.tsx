"use client";

import { useState, useEffect, useRef } from "react";
import { AlertTriangle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CostCalculator() {
  const [days, setDays] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const damageRef = useRef<HTMLSpanElement>(null);
  const savingsRef = useRef<HTMLSpanElement>(null);

  // Deterministic calculation
  const estimatedDamage = Math.floor(1200 + days * 850 + (days * 73) % 500);
  const potentialSavings = Math.floor(estimatedDamage * 0.8);

  // Animate card entrance
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="calculator" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1B5E20] via-[#2ECC71] to-[#27AE60] relative overflow-hidden">
      {/* Decorative bg pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23fff%22 fill-opacity=%220.15%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          What's Waiting Costing You?
        </h2>
        <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
          Mold spreads exponentially. Use our calculator to see why acting now saves money.
        </p>

        <div
          ref={sectionRef}
          className="bg-white rounded-2xl p-8 sm:p-10 border border-[#A3E4D7]/40 max-w-lg mx-auto"
          style={{ boxShadow: "0 20px 50px -10px rgba(46, 204, 113, 0.5)" }}
        >
          <h4 className="font-bold text-xl text-[#1A1A2E] mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#FFB300]" />
            Cost of Waiting Calculator
          </h4>

          <p className="text-[#6B7280] text-sm mb-6">
            Every day you wait, mold spreads 2x faster. See what delaying could cost you:
          </p>

          <div className="mb-8">
            <label className="block text-sm font-medium text-[#1A1A2E] mb-3">
              Days since you noticed mold:{" "}
              <span className="text-[#FFB300] font-bold text-lg">{days}</span>
            </label>
            <input
              type="range"
              min="1"
              max="14"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full h-2 bg-[#A3E4D7]/30 rounded-lg appearance-none cursor-pointer accent-[#FFB300]"
            />
            <div className="flex justify-between text-xs text-[#6B7280] mt-1">
              <span>1 day</span>
              <span>14 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#FFB300]/10 rounded-xl p-5 text-center">
              <p className="text-xs text-[#6B7280] uppercase tracking-wider font-medium">
                Estimated Damage
              </p>
              <p className="text-3xl font-bold text-[#FFB300] mt-1">
                $<span ref={damageRef}>{estimatedDamage.toLocaleString()}</span>
              </p>
            </div>
            <div className="bg-[#2ECC71]/10 rounded-xl p-5 text-center">
              <p className="text-xs text-[#6B7280] uppercase tracking-wider font-medium">
                Potential Savings
              </p>
              <p className="text-3xl font-bold text-[#1B5E20] mt-1">
                $<span ref={savingsRef}>{potentialSavings.toLocaleString()}</span>
              </p>
            </div>
          </div>

          <p className="text-xs text-[#6B7280] mb-6 text-center">
            💡 A FREE inspection could identify the problem before costs escalate
          </p>

          <a
            href="#contact"
            className="block w-full text-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-xl hover:from-[#27AE60] hover:to-[#1B5E20] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Stop the Damage Now →
          </a>
        </div>
      </div>
    </section>
  );
}
