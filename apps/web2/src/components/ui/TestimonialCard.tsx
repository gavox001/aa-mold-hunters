import { Star, CheckCircle } from "lucide-react";

export function TestimonialCard({ name, location, rating, text, verified }: { 
  name: string; location: string; rating: number; text: string; verified: boolean 
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-eco-primary-light/30 hover:border-eco-primary hover:shadow-eco-glow transition-all duration-300">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-amber-urgent fill-amber-urgent" : "text-neutral-muted"}`} />
        ))}
      </div>
      <p className="text-neutral-text mb-4 text-sm leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-eco-primary-light flex items-center justify-center font-bold text-eco-primary-dark">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-neutral-text text-sm">{name}</p>
          <p className="text-neutral-muted text-xs flex items-center gap-1">
            {location}
            {verified && <CheckCircle className="w-3 h-3 text-eco-primary" />}
          </p>
        </div>
      </div>
    </div>
  );
}
