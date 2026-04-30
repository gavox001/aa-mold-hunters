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
      className="relative py-20 md:py-32 bg-tech-slate overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-eco-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What Our <span className="text-eco-primary">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-animate="stagger">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-eco-primary/40 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-eco-primary/30 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.location}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-eco-primary text-eco-primary" />
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
