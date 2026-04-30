"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Claudia Sierra",
    rating: 5,
    text: "AA Mold Hunter identified chaetomium mold from a hidden dishwasher leak, providing clear explanations and recommendations for remediation. The technician crew ensured thorough encapsulation to prevent cross-contamination and maintained professionalism throughout.",
  },
  {
    id: 2,
    name: "Vanessa Berroteran",
    rating: 5,
    text: "Upon discovering persistent allergies in my children, a mold blood test revealed mold in our brand new home making me hard to believe it. AA Mold Hunters promptly inspected, explained hazards, and efficiently devised a remediation plan.",
  },
  {
    id: 3,
    name: "Elida Nina",
    rating: 5,
    text: "My property was rent for a couple of years and once tenants left i could notice mold. I didn't know what to do. I found AA Mold Hunters on Google and they gave me the needed solution. Now, my property is mold free and ready for new tenants.",
  },
  {
    id: 4,
    name: "Dolores Ramirez",
    rating: 5,
    text: "My family's health and mine are the most important to me. That's why when it comes to mold, wanted to hire the best, and a close friend recommended AA Mold Hunters. They were professional, responsible and dedicated technicians team.",
  },
  {
    id: 5,
    name: "Juan Pérez",
    rating: 5,
    text: "I would give this company more than 5 stars if I could. During the storm last year, my roof started leaking, i fixed it and i thought that everything was ok. But, for my surprise all the wet ceiling from the storm was starting to growth mold.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] dark:bg-[#2D2D44] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#1A1A2E] dark:text-white mb-12 sm:mb-16">
          How a FREE Mold Inspection Changed Their Lives…
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-2 rounded-full bg-white dark:bg-[#1A1A2E] shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#2ECC71]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-2 rounded-full bg-white dark:bg-[#1A1A2E] shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#2ECC71]" />
          </button>

          {/* Testimonial Card */}
          <div className="relative h-[350px] sm:h-[250px] w-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full bg-white dark:bg-[#1A1A2E] rounded-xl shadow-xl p-8 sm:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFB300] text-[#FFB300]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 h-24 sm:h-auto overflow-hidden">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] dark:text-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-[#2ECC71]"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
