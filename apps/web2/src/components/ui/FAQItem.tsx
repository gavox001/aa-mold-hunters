"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-eco-primary-light/30 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-eco-primary/30 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-text pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-eco-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-muted flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-neutral-muted text-sm leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}
