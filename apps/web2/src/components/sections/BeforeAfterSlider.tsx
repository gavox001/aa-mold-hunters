"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border-2 border-eco-primary-light/40">
      {/* After Image (visible por defecto) */}
      <div className="aspect-video bg-gradient-to-br from-eco-primary-light to-white flex items-center justify-center">
        <div className="text-center p-6">
          <CheckCircle className="w-16 h-16 text-eco-primary mx-auto mb-4" />
          <h4 className="font-bold text-lg text-neutral-text">After Remediation</h4>
          <p className="text-neutral-muted text-sm">100% Mold-Free Guarantee</p>
        </div>
      </div>
      
      {/* Before Image (overlay) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-urgent/20 to-amber-urgent/5 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center p-6">
          <AlertTriangle className="w-16 h-16 text-amber-urgent mx-auto mb-4" />
          <h4 className="font-bold text-lg text-neutral-text">Before: Hidden Mold</h4>
          <p className="text-neutral-muted text-sm">Detected with Thermal Imaging</p>
        </div>
      </div>
      
      {/* Slider Handle */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Slide to compare before and after"
      />
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-xs font-bold text-neutral-text">
          ↔️
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-center text-xs text-neutral-muted py-3 bg-white/80">
        👈 Drag slider to see the difference our thermal inspection makes
      </p>
    </div>
  );
}
