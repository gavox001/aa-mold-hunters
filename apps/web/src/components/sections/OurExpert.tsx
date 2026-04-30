"use client";

import Image from "next/image";

export function OurExpert() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Lead Mold Inspector"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] dark:text-white uppercase tracking-tight">
              Meet Our Lead Inspector
            </h2>
            <h3 className="text-xl sm:text-2xl text-eco-primary dark:text-[#4ADE80] font-bold">
              Carlos Rodriguez
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 15 years of experience in mold remediation and indoor air quality, 
              Carlos leads our team of certified inspectors. His expertise in identifying 
              hidden mold sources has helped thousands of South Florida families protect 
              their homes and health.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Certified by the Institute of Inspection Cleaning and Restoration (IICRC), 
              Carlos brings both technical knowledge and genuine care to every inspection.
            </p>
            <button className="w-fit px-8 py-3 text-sm sm:text-base font-bold text-white gradient-eco hover:gradient-eco-hover transition-all duration-300 shadow-lg hover:shadow-xl uppercase">
              Schedule Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
