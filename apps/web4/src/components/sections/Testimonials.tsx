"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'Hollywood, FL',
    rating: 5,
    text: "AA Mold Hunters saved my home. They found mold I didn't even know existed behind my bathroom walls. Fast, professional, and the team was incredibly thorough. Highly recommend!",
  },
  {
    name: 'James Thompson',
    location: 'Miami, FL',
    rating: 5,
    text: "After Hurricane Irma, I had water damage everywhere. This team responded within hours and had everything dried out before mold could grow. Incredible emergency service.",
  },
  {
    name: 'Sarah Chen',
    location: 'Fort Lauderdale, FL',
    rating: 5,
    text: "The AI estimator was spot-on with the quote, and the final bill was exactly what they predicted. No surprise charges. The remediation team was friendly and explained everything.",
  },
  {
    name: 'Robert Williams',
    location: 'Boca Raton, FL',
    rating: 5,
    text: "I've used AA Mold Hunters twice now over the years. Consistent quality, honest pricing, and they stand behind their work. They're the only company I trust with my family's home.",
  },
]

export function Testimonials() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What Our <span className="text-primary">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5" data-animate="stagger">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-3" />
                <p className="text-foreground/75 leading-relaxed mb-5 text-sm">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-foreground font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.location}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}