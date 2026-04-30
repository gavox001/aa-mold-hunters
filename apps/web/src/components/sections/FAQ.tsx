"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

const faqs = [
  {
    q: "Is the inspection really free?",
    a: "Yes! Our thermal inspection is 100% free with no obligation. We only get paid if you choose to proceed with remediation services.",
  },
  {
    q: "How quickly can you respond?",
    a: "We guarantee a 1-hour response time for emergencies in Miami-Dade, Broward, and Palm Beach counties. Other areas: 2-4 hours.",
  },
  {
    q: "Do you work with insurance?",
    a: "Yes! We're approved by all major Florida insurers. Our team handles all paperwork and communicates directly with your adjuster.",
  },
  {
    q: "What if mold comes back?",
    a: "We offer a 100% satisfaction guarantee. If mold returns in the treated area within 12 months, we re-treat at no cost to you.",
  },
  {
    q: "Are your technicians certified?",
    a: "All our technicians are IICRC-certified, background-checked, and trained in the latest mold remediation protocols.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#A3E4D7]/30 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[#1A1A2E] dark:text-white pr-4 group-hover:text-[#2ECC71] transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0 group-hover:text-[#2ECC71] transition-colors" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const sectionRef = useGSAPReveal({ type: "fade-up" });

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] dark:bg-[#2D2D44]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] dark:text-gray-400">
            Everything you need to know about our FREE inspection and remediation process.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 sm:p-8 border border-[#A3E4D7]/30 shadow-xl"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
