"use client";

import React from "react";

export function SecondaryCTA({ text = "See if you qualify →", href = "#services" }: { text?: string; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleClick}
      className="px-6 py-4 rounded-xl font-semibold bg-white text-eco-primary-dark border-2 border-eco-primary-light hover:border-eco-primary hover:bg-eco-primary-light/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-eco-primary/30 active:scale-95"
    >
      {text}
    </button>
  );
}
