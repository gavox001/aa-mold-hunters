"use client";

import React from "react";

export function PrimaryCTA({ text = "🎯 Claim Your FREE Inspection Now", href = "#quote-form" }: { text?: string; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleClick}
      className="btn-cta-primary group"
      aria-label={text}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
