"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for GSAP ScrollTrigger reveal animations.
 * Supports: fade-up, stagger, counter.
 */
export function useGSAPReveal(
  options: {
    type?: "fade-up" | "stagger" | "counter";
    delay?: number;
    duration?: number;
    staggerAmount?: number;
    counterTarget?: number;
    triggerStart?: string;
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    type = "fade-up",
    delay = 0,
    duration = 0.8,
    staggerAmount = 0.15,
    counterTarget = 0,
    triggerStart = "top 85%",
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      if (type === "fade-up") {
        gsap.from(ref.current, {
          y: 40,
          opacity: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            toggleActions: "play none none none",
          },
        });
      }

      if (type === "stagger") {
        const children = ref.current!.children;
        gsap.from(children, {
          y: 50,
          opacity: 0,
          duration,
          delay,
          stagger: staggerAmount,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            toggleActions: "play none none none",
          },
        });
      }

      if (type === "counter") {
        const el = ref.current!;
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          delay,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            el.textContent = Math.ceil(Number(el.textContent)).toLocaleString();
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [type, delay, duration, staggerAmount, counterTarget, triggerStart]);

  return ref;
}
