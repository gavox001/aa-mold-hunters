import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { CheckCircle, Phone, MapPin, Shield, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { heroHome } from '@/assets/images'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-features',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          '.hero-form',
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 0.8 },
          '-=0.6'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.email || !formData.zipCode) {
      toast.error('Please fill in all fields')
      return
    }
    toast.success('Inspection request submitted! We will contact you within 24 hours.')
    setFormData({ name: '', phone: '', email: '', zipCode: '' })
  }

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-tech-navy"
    >
      <div className="absolute inset-0">
        <img
          src={heroHome}
          alt="South Florida Home"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-eco-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div ref={contentRef} className="space-y-6 md:space-y-8">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <MapPin className="w-4 h-4 text-eco-primary" />
              <span className="text-white/80 text-sm font-medium">
                Serving South Florida
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              #1 Mold Inspection &{' '}
              <span className="text-eco-primary">Remediation</span>
              <br className="hidden sm:block" /> in South Florida
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-white/70 max-w-xl">
              We help homeowners detect hidden moisture, stop mold growth, and
              protect their homes before damage spreads. Your free inspection is
              100% covered by most insurances.
            </p>

            <div className="hero-features flex flex-wrap gap-4">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency Response' },
                { icon: Award, text: 'Certified Technicians' },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/80"
                >
                  <feature.icon className="w-5 h-5 text-eco-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href="#services"
                onClick={scrollToServices}
              >
                <Button className="bg-eco-primary hover:bg-eco-hover text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all">
                  View Our Services
                </Button>
              </a>
              <Link to="tel:+13058135922">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-eco-primary" />
                <span>Free Inspection</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-eco-primary" />
                <span>Insurance Accepted</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-eco-primary" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <div ref={formRef} className="hero-form">
            <div className="glass-card p-6 md:p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Get a Free Inspection
                </h3>
                <p className="text-white/60 text-sm">
                  Fill out the form and we'll contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />

                <Button
                  type="submit"
                  className="w-full bg-alert-amber hover:bg-amber-500 text-white font-bold py-6 text-lg rounded-xl hover:shadow-glow-amber transition-all"
                >
                  SCHEDULE FREE INSPECTION
                </Button>
              </form>

              <p className="text-white/40 text-xs text-center">
                By submitting, you agree to receive communications from AA Mold
                Hunters. Reply STOP to cancel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
