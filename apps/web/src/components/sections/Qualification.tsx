"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const criteria = [
  {
    text: "There is ",
    highlight: "visible water damage",
    rest: " in your home. This includes leaks, flooding, or other water-related issues.",
  },
  {
    text: "You live in a ",
    highlight: "tropical wet climate",
    rest: " where mold thrives.",
  },
  {
    text: "Your home recently endured ",
    highlight: "serious weather conditions",
    rest: " or a natural disaster.",
  },
  {
    text: "The people living in your home have experienced worsened ",
    highlight: "allergies, asthma or respiratory infections",
    rest: ".",
  },
  {
    text: "You currently have a ",
    highlight: "home owner's insurance policy",
    rest: ".",
  },
];

export function Qualification() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary dark:bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight tracking-tight">
              SEE IF YOU QUALIFY FOR{" "}
              <span className="text-accent block mt-1">OUR FREE MOLD INSPECTION</span>
            </h2>

            <ul className="flex flex-col gap-5">
              {criteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-primary-foreground">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg leading-relaxed text-primary-foreground/90">
                    {item.text}
                    <span className="text-accent font-bold">
                      {item.highlight}
                    </span>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-fit px-8 py-4 text-sm sm:text-base font-bold text-primary bg-accent rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 mt-4 uppercase tracking-wide"
            >
              <CheckCircle className="w-5 h-5" />
              Apply for your FREE Inspection
            </Link>
          </div>

          {/* Empty space for potential image */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
