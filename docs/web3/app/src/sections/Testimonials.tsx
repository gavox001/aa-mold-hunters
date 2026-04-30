import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vanessa Berroteran',
    location: 'Hollywood, FL',
    rating: 5,
    text: 'AA Mold Hunter identified chaetomium mold from a hidden dishwasher leak, providing clear explanations and recommendations for remediation. The technician crew ensured thorough encapsulation to prevent cross-contamination.',
  },
  {
    name: 'Elida Nina',
    location: 'Miami, FL',
    rating: 5,
    text: 'My property was rented for a couple of years and once tenants left I could notice mold. I did not know what to do. I found AA Mold Hunters on Google and they gave me the needed solution. Now, my property is mold free and ready for new tenants.',
  },
  {
    name: 'Dolores Ramirez',
    location: 'Fort Lauderdale, FL',
    rating: 5,
    text: "My family's health and mine are the most important to me. That's why when it comes to mold, I wanted to hire the best. They were professional, responsible and dedicated. Once they helped me, I feel safe. I highly recommend them 100%.",
  },
  {
    name: 'Juan Pérez',
    location: 'Pembroke Pines, FL',
    rating: 5,
    text: 'I would give this company more than 5 stars if I could. During the storm last year, my roof started leaking. All the wet ceiling from the storm was starting to grow mold. They fixed everything perfectly.',
  },
  {
    name: 'Claudia Sierra',
    location: 'Boca Raton, FL',
    rating: 5,
    text: 'Upon discovering persistent allergies in my children, a mold blood test revealed mold in our brand new home. AA Mold Hunters promptly inspected, explained hazards, and efficiently devised a remediation plan.',
  },
  {
    name: 'Mirian Marmolejos',
    location: 'West Palm Beach, FL',
    rating: 5,
    text: 'AA Mold Hunters is a great company. They helped us through the process in our home. The team was respectful, organized, and really professional. I recommend the company AAA+++!',
  },
];

export function Testimonials() {
  const containerRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-tech-slate to-tech-navy overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What Our <span className="text-eco-primary">Customers</span> Say
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Real reviews from real South Florida homeowners who trusted us with their homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-eco-primary/30 transition-all relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-eco-primary/20" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-alert-amber fill-alert-amber"
                    />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-eco-primary/20 flex items-center justify-center">
                    <span className="text-eco-primary font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
