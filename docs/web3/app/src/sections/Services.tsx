import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Droplets, Shield, Home, Thermometer, Umbrella, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const services = [
  {
    icon: Search,
    title: 'Free Mold Inspection',
    shortDesc: 'Comprehensive visual inspection at no cost to you.',
    fullDesc:
      'Our certified inspectors conduct a thorough visual assessment of your property, identifying potential mold growth, water damage, and moisture issues. We check attics, crawl spaces, basements, and all living areas. Most inspections are 100% covered by insurance.',
    image: '/images/mold-inspection.jpg',
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
    image: '/images/water-damage.jpg',
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
    image: '/images/mold-remediation.jpg',
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
    image: '/images/roof-protection.jpg',
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
    image: '/images/thermal-detection.jpg',
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
      'When your roof or structure is compromised, our industrial-grade shrink wrap and tarp solutions provide immediate weather protection. We install tight, durable barriers that withstand Florida\'s toughest storms.',
    image: '/images/roof-protection.jpg',
    features: [
      'Industrial-grade materials',
      'Storm-resistant installation',
      'Custom-fit applications',
      'Fast deployment',
      'Removal & cleanup included',
    ],
    urgency: true,
  },
];

export function Services() {
  const containerRef = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-tech-navy to-tech-slate overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              How We <span className="text-eco-primary">Protect</span> Your Home
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Different problems need different solutions. These are ours:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group relative glass-card overflow-hidden hover:border-eco-primary/40 transition-all duration-300 cursor-pointer ${
                  service.urgency ? 'border-alert-amber/30' : ''
                }`}
                onClick={() => setSelectedService(service)}
              >
                {/* Urgency Badge */}
                {service.urgency && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-alert-amber text-tech-navy text-xs font-bold rounded-full">
                    URGENT
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-slate to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-eco-primary/90 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-eco-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm">{service.shortDesc}</p>
                  <div className="mt-4 flex items-center gap-2 text-eco-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-tech-slate border-white/10 text-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-eco-primary/20 flex items-center justify-center">
                {selectedService && (
                  <selectedService.icon className="w-6 h-6 text-eco-primary" />
                )}
              </div>
              <DialogTitle className="text-2xl text-white">
                {selectedService?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-white/60 text-base">
              {selectedService?.fullDesc}
            </DialogDescription>
          </DialogHeader>

          {selectedService && (
            <div className="mt-4 space-y-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-6 h-6 rounded-full bg-eco-primary/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3 h-3 text-eco-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#contact" onClick={() => setSelectedService(null)}>
                  <Button className="bg-eco-primary hover:bg-eco-hover text-white font-semibold px-6">
                    Get a Quote
                  </Button>
                </a>
                <a href="tel:+13058135922">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
