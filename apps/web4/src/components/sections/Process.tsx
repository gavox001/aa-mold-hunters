"use client";

import { Link } from '@/i18n/routing'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Search, Droplets, Shield, CheckCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Free Inspection',
    description: 'We conduct a thorough visual inspection, moisture mapping, and thermal imaging to identify all problem areas.',
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Detailed Assessment',
    description: 'Receive a comprehensive report with photos, test results, and a clear remediation plan with transparent pricing.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Professional Remediation',
    description: 'Our certified team contains, removes, and treats mold using EPA-approved methods and industrial-grade equipment.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Verification & Guarantee',
    description: 'Post-remediation testing confirms mold levels are safe. We back our work with a satisfaction guarantee.',
  },
]

export function Process() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-card overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              From <span className="text-primary">Detection</span> to Resolution
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              A systematic approach that delivers consistent results every time.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" data-animate="stagger">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="p-5 rounded-xl bg-secondary border border-border h-full hover:border-primary/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary/25 mb-3">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 transform -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center" data-animate="fade-up">
            <p className="text-muted-foreground mb-6">
              Concerned about mold? Don&apos;t wait for it to spread.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all">
                  Schedule Free Inspection
                </Button>
              </Link>
              <a href="tel:+13058135922">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-foreground/10 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (305) 813-5922
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}