import { TestimonialCard } from "../ui/TestimonialCard";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria G.", location: "Miami, FL", rating: 5, text: "They found mold behind my wall that 2 other companies missed. Saved me $15k in structural damage.", verified: true },
  { name: "Robert T.", location: "Fort Lauderdale, FL", rating: 5, text: "Called at 2 AM during a storm. They were at my door in 45 minutes. True professionals.", verified: true },
  { name: "Jennifer L.", location: "West Palm Beach, FL", rating: 5, text: "The thermal inspection showed problems I couldn't see. Free inspection paid for itself 10x over.", verified: true },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-urgent fill-amber-urgent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">
            Trusted by 2,300+ Florida Homeowners
          </h2>
          <p className="text-neutral-muted max-w-2xl mx-auto">
            Real stories from neighbors who caught mold early and saved thousands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="btn-cta-text flex items-center justify-center gap-2 mx-auto">
            Read all 2,300+ reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
