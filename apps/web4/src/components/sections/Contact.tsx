"use client";

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Phone, Mail, MapPin, Send, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export function Contact() {
  const containerRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields')
      return
    }
    toast.success('Message sent! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-background overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Get Your <span className="text-primary">Free</span> Inspection
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Call us 24/7 or fill out the form. We respond to all inquiries within hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-5" data-animate="slide-left">
              <div className="p-5 rounded-2xl bg-card border border-border space-y-5">
                <h3 className="text-lg font-bold text-foreground">Contact Information</h3>

                <div className="space-y-3">
                  <a
                    href="tel:+13058135922"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-muted transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Phone</div>
                      <div className="text-foreground font-semibold text-sm">(305) 813-5922</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@aamoldhunters.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-muted transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Email</div>
                      <div className="text-foreground font-semibold text-sm">info@aamoldhunters.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Address</div>
                      <div className="text-foreground font-semibold text-sm">6260 Johnson St, Ste B</div>
                      <div className="text-muted-foreground text-xs">Hollywood, FL 33024</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-accent font-semibold text-sm">24/7 Emergency</div>
                      <div className="text-muted-foreground text-xs">Call anytime for urgent water damage</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="text-foreground font-semibold text-sm">Service Areas</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Hollywood', 'Miami', 'Fort Lauderdale',
                    'Boca Raton', 'West Palm Beach', 'Pembroke Pines',
                    'Miramar', 'Coral Springs', 'Davie', 'Florida Keys',
                  ].map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3" data-animate="slide-right">
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border space-y-5"
              >
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-muted-foreground text-xs mb-1.5 block">
                      Full Name *
                    </label>
                    <Input
                      id="contact-name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-muted-foreground text-xs mb-1.5 block">
                      Phone Number *
                    </label>
                    <Input
                      id="contact-phone"
                      placeholder="(305) 123-4567"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-muted-foreground text-xs mb-1.5 block">
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-muted-foreground text-xs mb-1.5 block">
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-md bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="inspection">Free Mold Inspection</option>
                    <option value="remediation">Mold Remediation</option>
                    <option value="water">Water Damage Restoration</option>
                    <option value="roof">Roof Protection</option>
                    <option value="thermal">Thermal Leak Detection</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-muted-foreground text-xs mb-1.5 block">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your situation..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg rounded-xl hover:shadow-glow transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  By submitting, you agree to be contacted by AA Mold Hunters Services LLC.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}