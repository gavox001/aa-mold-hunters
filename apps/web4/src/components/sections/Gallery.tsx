"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { beforeAfter1, beforeAfter2, beforeAfter3 } from '@/assets/images'

export function Gallery() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-secondary" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Before & <span className="text-primary">After</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              See the transformation. Real results from real South Florida homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-animate="stagger">
            {[
              { img: beforeAfter1.src, title: 'Coral Springs Home', span: 'md:row-span-2' },
              { img: beforeAfter2.src, title: 'Miami Condo', span: '' },
              { img: beforeAfter3.src, title: 'Hollywood House', span: '' },
            ].map((item, i) => (
              <div
                key={i}
                className={`group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 ${item.span}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.title}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="256"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    COMPLETED
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">Mold Remediation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}