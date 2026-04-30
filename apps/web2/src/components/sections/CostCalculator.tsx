"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export function CostCalculator() {
  const [days, setDays] = useState(3);
  // Deterministic calculation — no Math.random() to avoid hydration mismatch
  const estimatedDamage = Math.floor(1200 + (days * 850) + (days * 73 % 500));
  const potentialSavings = Math.floor(estimatedDamage * 0.8);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-eco-primary-light/40 shadow-eco-glow max-w-lg mx-auto">
      <h4 className="font-bold text-lg text-neutral-text mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-urgent" />
        Cost of Waiting Calculator
      </h4>
      
      <p className="text-neutral-muted text-sm mb-4 text-left">
        Every day you wait, mold spreads 2x faster. See what delaying could cost you:
      </p>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-text mb-2 text-left">
          Days since you noticed mold: <span className="text-amber-urgent font-bold">{days}</span>
        </label>
        <input
          type="range"
          min="1"
          max="14"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full h-2 bg-neutral-muted/20 rounded-lg appearance-none cursor-pointer accent-amber-urgent"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-amber-urgent/10 rounded-xl p-4 text-center">
          <p className="text-xs text-neutral-muted uppercase tracking-wide">Estimated Damage</p>
          <p className="text-2xl font-bold text-amber-urgent">${estimatedDamage.toLocaleString()}</p>
        </div>
        <div className="bg-eco-primary-light/30 rounded-xl p-4 text-center">
          <p className="text-xs text-neutral-muted uppercase tracking-wide">Potential Savings</p>
          <p className="text-2xl font-bold text-eco-primary-dark">${potentialSavings.toLocaleString()}</p>
        </div>
      </div>
      
      <p className="text-xs text-neutral-muted mb-4 text-center">
        💡 A FREE inspection could identify the problem before costs escalate
      </p>
      
      <button className="btn-cta-primary w-full">
        Stop the Damage Now →
      </button>
    </div>
  );
}
