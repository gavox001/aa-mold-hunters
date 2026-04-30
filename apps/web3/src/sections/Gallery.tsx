import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { beforeAfter1, beforeAfter2, beforeAfter3 } from '@/assets/images'

export function Gallery() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-tech-navy to-tech-slate overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Before & <span className="text-eco-primary">After</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              See the transformation. Real results from real South Florida homes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-animate="stagger">
            {[
              { img: beforeAfter1, title: 'Coral Springs Home' },
              { img: beforeAfter2, title: 'Miami Condo' },
              { img: beforeAfter3, title: 'Hollywood House' },
            ].map((item, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={`${item.title}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="256"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-eco-primary text-white text-xs font-bold rounded-full">
                    COMPLETED
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">Mold Remediation Complete</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
