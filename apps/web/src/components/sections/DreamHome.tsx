"use client";

import { Shield, Home, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Certified Experts",
    description:
      "Licensed and certified mold remediation specialists with years of experience restoring homes to safe conditions.",
  },
  {
    icon: Home,
    title: "Fast Response",
    description:
      "24/7 emergency services available. We respond within hours, not days, because mold waits for no one.",
  },
  {
    icon: Heart,
    title: "Health First",
    description:
      "Your family's safety is our priority. We use safe, effective remediation methods that protect what matters most.",
  },
];

export function DreamHome() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1A1A2E] dark:text-white mb-12 sm:mb-16 max-w-3xl mx-auto">
          Why Choose AA Mold Hunters?
        </h2>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="flex flex-row items-start gap-4 max-w-md w-full"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-eco-primary/10 dark:bg-eco-primary/20 rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-eco-primary" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
