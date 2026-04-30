"use client";

import { Clock } from "lucide-react";

export function ScarcityProgress({ booked = 7, total = 10 }: { booked?: number; total?: number }) {
  const percentage = (booked / total) * 100;
  
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm mb-2 text-neutral-muted">
        <span>Slots remaining today</span>
        <span className="font-bold text-amber-urgent">{total - booked} of {total}</span>
      </div>
      <div className="progress-urgency">
        <div className="progress-urgency-fill" style={{ width: `${percentage}%` }} />
      </div>
      <p className="text-xs text-neutral-muted mt-2 flex items-center justify-center gap-1">
        <Clock className="w-3 h-3" />
        Updated 2 minutes ago • High demand in your area
      </p>
    </div>
  );
}
