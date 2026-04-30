"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Shield, Award, CheckCircle, FileCheck, Star } from 'lucide-react'

const credentials = [
  {
    icon: Shield,
    title: 'EPA Guidelines Compliant',
    description: 'We follow all EPA guidelines for mold remediation, ensuring safe and effective treatment.',
  },
  {
    icon: Award,
    title: 'IICRC Certified',
    description: 'Our technicians are IICRC certified in water damage restoration and mold remediation.',
  },
  {
    icon: FileCheck,
    title: 'State Licensed',
    description: 'Fully licensed in the state of Florida for mold assessment and remediation services.',
  },
  {
    icon: CheckCircle,
    title: 'Insurance Approved',
    description: 'We work directly with all major insurance providers and can assist with claims.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: 'Consistently rated 5 stars on Google, Yelp, and HomeAdvisor by hundreds of customers.',
  },
  {
    icon: Shield,
    title: 'Warranty Provided',
    description: 'All work is backed by our comprehensive warranty against mold recurrence.',
  },
]

export function Credentials() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="credentials"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-background overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Credentials
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Certified <span className="text-primary">Excellence</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Rest easy knowing you&apos;re working with South Florida&apos;s most qualified mold specialists.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-animate="stagger">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <cred.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-12 rounded-2xl bg-card border border-primary/20 p-8" data-animate="fade-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">A+</div>
                <div className="text-muted-foreground mt-1">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">5.0</div>
                <div className="text-muted-foreground mt-1">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground mt-1">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}