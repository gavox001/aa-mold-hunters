"use client";

import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StickyMobileCTA() {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide when user reaches the contact form
    const formEl = document.getElementById("contact");
    if (!formEl) return;

    const trigger = ScrollTrigger.create({
      trigger: formEl,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setVisible(false),
      onLeaveBack: () => setVisible(true),
    });

    return () => trigger.kill();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-[#1A1A2E] border-t border-[#A3E4D7]/30 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
    >
      <div className="flex gap-3">
        <a
          href="tel:+13055551234"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2ECC71] text-white font-bold hover:bg-[#27AE60] transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#FFB300] to-[#FFA000] border-2 border-[#FFB300] text-[#1A1A2E] font-bold active:scale-95 animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          FREE Inspection
        </a>
      </div>
    </div>
  );
}
