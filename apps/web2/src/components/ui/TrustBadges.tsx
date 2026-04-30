import { Star, Shield, Clock, CheckCircle } from "lucide-react";

export function TrustBadges() {
  const badges = [
    { icon: Star, text: "4.9/5 (2,300+ Reviews)", color: "text-amber-urgent" },
    { icon: Shield, text: "Licensed & Insured", color: "text-eco-primary" },
    { icon: Clock, text: "24/7 Emergency Response", color: "text-eco-primary" },
    { icon: CheckCircle, text: "100% Insurance Claims Approved", color: "text-eco-primary" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-6 border-y border-eco-primary-light/30">
      {badges.map((badge, i) => (
        <span key={i} className="flex items-center gap-2 text-sm font-medium text-neutral-muted">
          <badge.icon className={`w-4 h-4 ${badge.color}`} />
          {badge.text}
        </span>
      ))}
    </div>
  );
}
