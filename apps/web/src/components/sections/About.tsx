"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
                [ About Us ]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Your Trusted Remediation Partner
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                AA Mold Hunters is South Florida&apos;s leading mold inspection and 
                remediation company. We specialize in identifying hidden mold problems 
                and providing comprehensive solutions to protect your home and health.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With over 10 years of experience, our certified technicians use 
                advanced technology to detect mold in areas others miss. We&apos;re committed 
                to transparency, quality, and your complete satisfaction.
              </p>
            </div>
            
            <Button size="lg" className="w-fit bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg shadow-accent/20 mt-2">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Mold inspection technician"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
