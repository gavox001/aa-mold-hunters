"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Shield, Users, Award, Clock } from 'lucide-react'
import { team } from '@/assets/images'

export function AboutUs() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-card overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div data-animate="fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                South Florida&apos;s Most <span className="text-primary">Trusted</span> Mold Experts
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                For over 15 years, AA Mold Hunters has protected South Florida homes from the hidden dangers of mold and water damage. Our certified technicians combine cutting-edge technology with proven remediation techniques to deliver results that exceed expectations.
              </p>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                We understand that mold isn&apos;t just an eyesore—it&apos;s a health hazard that can compromise your family&apos;s wellbeing. That&apos;s why we respond faster, inspect thoroughness, and remediate completely.
              </p>

              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, number: '15+', label: 'Years Experience' },
                  { icon: Users, number: '5,000+', label: 'Homes Protected' },
                  { icon: Award, number: '100%', label: 'Satisfaction Rate' },
                  { icon: Clock, number: '24/7', label: 'Emergency Response' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with Overlay */}
            <div className="relative" data-animate="slide-right">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={team.src}
                  alt="AA Mold Hunters Team"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </div>
              {/* License Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-lg">Licensed & Insured</div>
                    <div className="text-muted-foreground text-sm">FL License #Mold-12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}