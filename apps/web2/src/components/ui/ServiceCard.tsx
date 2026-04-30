import { ChevronDown } from "lucide-react";

export function ServiceCard({ icon, title, desc, cta }: { icon: string; title: string; desc: string; cta: string }) {
  return (
    <div className="card-service group hover:cursor-pointer">
      <div className="card-icon mb-4 text-2xl">{icon}</div>
      <h3 className="text-lg font-bold text-neutral-text mb-2">{title}</h3>
      <p className="text-neutral-muted mb-4 text-sm">{desc}</p>
      <button className="btn-cta-text group">
        {cta}
        <ChevronDown className="w-4 h-4 inline group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  );
}
