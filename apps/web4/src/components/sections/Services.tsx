"use client";

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Droplets, Shield, Home, Thermometer, Umbrella, Search, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import {
  moldInspection,
  waterDamage,
  moldRemediation,
  roofProtection,
  thermalDetection,
} from '@/assets/images'

const services = [
  {
    icon: Search,
    title: 'Free Mold Inspection',
    shortDesc: 'Comprehensive visual inspection at no cost to you.',
    fullDesc:
      'Our certified inspectors conduct a thorough visual assessment of your property, identifying potential mold growth, water damage, and moisture issues. We check attics, crawl spaces, basements, and all living areas. Most inspections are 100% covered by insurance.',
    image: moldInspection,
    features: [
      'Visual inspection of all affected areas',
      'Moisture meter readings',
      'Thermal imaging scan',
      'Detailed written report',
      'Insurance documentation',
    ],
    urgency: true,
  },
  {
    icon: Droplets,
    title: 'Water Damage Restoration',
    shortDesc: 'Rapid water extraction and structural drying.',
    fullDesc:
      'When water invades your home, every minute counts. Our emergency response team arrives within hours to extract standing water, deploy industrial drying equipment, and prevent secondary damage like mold growth and structural weakening.',
    image: waterDamage,
    features: [
      '24/7 emergency response',
      'Water extraction & removal',
      'Industrial dehumidification',
      'Structural drying',
      'Damage assessment & documentation',
    ],
    urgency: true,
  },
  {
    icon: Shield,
    title: 'Mold Remediation',
    shortDesc: 'Complete mold removal and prevention solutions.',
    fullDesc:
      'Our certified remediation team follows EPA and IICRC protocols to safely remove mold, contain affected areas, and restore your indoor air quality. We do not just treat the symptoms—we eliminate the source.',
    image: moldRemediation,
    features: [
      'Containment barrier setup',
      'HEPA air filtration',
      'Safe mold removal',
      'Antimicrobial treatment',
      'Post-remediation verification',
    ],
    urgency: false,
  },
  {
    icon: Home,
    title: 'Roof Protection & Repair',
    shortDesc: 'Emergency tarping and leak repair services.',
    fullDesc:
      'South Florida storms can expose your roof to serious water damage. We provide emergency tarp installation, temporary shrink wrapping, and permanent leak repairs to keep your home protected from the elements.',
    image: roofProtection,
    features: [
      'Emergency tarp installation',
      'Shrink wrap services',
      'Leak detection & repair',
      'Roof damage assessment',
      'Insurance claim documentation',
    ],
    urgency: true,
  },
  {
    icon: Thermometer,
    title: 'Thermal Leak Detection',
    shortDesc: 'Advanced thermal imaging finds hidden moisture.',
    fullDesc:
      'Do not guess where the water is. Our non-invasive thermal imaging cameras detect temperature differences behind walls, ceilings, and floors to pinpoint hidden moisture before mold grows. No demolition required.',
    image: thermalDetection,
    features: [
      'Non-invasive inspection',
      'Thermal imaging cameras',
      'Moisture mapping',
      'Digital documentation',
      'Pre & post comparison scans',
    ],
    urgency: false,
  },
  {
    icon: Umbrella,
    title: 'Shrinkwrap & Tarps',
    shortDesc: 'Temporary weather protection for exposed structures.',
    fullDesc:
      "When your roof or structure is compromised, our industrial-grade shrink wrap and tarp solutions provide immediate weather protection. We install tight, durable barriers that withstand Florida's toughest storms.",
    image: roofProtection,
    features: [
      'Industrial-grade materials',
      'Storm-resistant installation',
      'Custom-fit applications',
      'Fast deployment',
      'Removal & cleanup included',
    ],
    urgency: true,
  },
]

export function Services() {
  const containerRef = useScrollAnimation()
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              How We <span className="text-primary">Protect</span> Your Home
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Different problems need different solutions. These are ours:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer card-hover ${
                  service.urgency ? 'ring-1 ring-accent/30' : ''
                }`}
                onClick={() => setSelectedService(service)}
              >
                {/* Urgency Badge */}
                {service.urgency && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    URGENT
                  </div>
                )}

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="160"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-muted-foreground text-sm">{service.shortDesc}</p>
                  <div className="mt-3 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal 
        open={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        className="max-w-2xl bg-card border-border text-card-foreground p-0"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              {selectedService && (
                <selectedService.icon className="w-6 h-6 text-primary" />
              )}
            </div>
            <h2 className="text-2xl font-bold">
              {selectedService?.title}
            </h2>
          </div>
          <p className="text-muted-foreground text-base mb-6">
            {selectedService?.fullDesc}
          </p>

          {selectedService && (
            <div className="space-y-6">
              {/* Service Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedService.image.src}
                  alt={selectedService.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="192"
                />
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Link href="/contact" onClick={() => setSelectedService(null)}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                    Get a Quote
                  </Button>
                </Link>
                <a href="tel:+13058135922">
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-foreground/10"
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </section>
  )
}