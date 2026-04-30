"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} id="services" className="relative py-16 sm:py-20 lg:py-24 bg-primary overflow-hidden">
      {/* Background Image - Left Side with Parallax */}
      <motion.div 
        style={{ y }}
        className="hidden lg:block absolute top-1/2 left-[5%] -translate-y-1/2 w-[40%] max-w-[660px] z-10"
      >
        <div className="relative aspect-[4/3] border-[10px] border-border shadow-2xl rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
            alt="Water damage restoration"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Empty space for image on desktop */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-primary-foreground py-8 lg:py-16">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
                [ Our Solutions ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight leading-tight">
                Complete Mold & Water Damage Restoration
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-sm sm:text-base leading-relaxed max-w-lg text-primary-foreground/90">
                From initial inspection to complete remediation, we handle every 
                step of the mold removal process. Our certified team uses advanced 
                equipment to detect hidden moisture and eliminate mold at its source.
              </p>
              <p className="text-sm sm:text-base leading-relaxed max-w-lg text-primary-foreground/90">
                Whether you&apos;re dealing with water damage, roof leaks, or visible mold 
                growth, we have the expertise to restore your home to a safe, healthy 
                environment.
              </p>
            </div>
            <button className="w-fit px-8 py-4 text-sm sm:text-base font-bold text-primary bg-accent rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 tracking-wide mt-4">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
