import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail, MapPin, Send, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const containerRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Message sent! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-navy overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Get Your <span className="text-eco-primary">Free</span> Inspection
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Call us 24/7 or fill out the form. We respond to all inquiries within hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6" data-animate="slide-left">
              <div className="glass-card p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="tel:+13058135922"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-eco-primary/20 flex items-center justify-center group-hover:bg-eco-primary/30 transition-all">
                      <Phone className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Phone</div>
                      <div className="text-white font-semibold">(305) 813-5922</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@aamoldhunters.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-eco-primary/20 flex items-center justify-center group-hover:bg-eco-primary/30 transition-all">
                      <Mail className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Email</div>
                      <div className="text-white font-semibold">info@aamoldhunters.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-12 h-12 rounded-xl bg-eco-primary/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Address</div>
                      <div className="text-white font-semibold">6260 Johnson St, Ste B</div>
                      <div className="text-white/60 text-sm">Hollywood, FL 33024</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-alert-amber/10 border border-alert-amber/20">
                    <div className="w-12 h-12 rounded-xl bg-alert-amber/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-alert-amber" />
                    </div>
                    <div>
                      <div className="text-alert-amber font-semibold">24/7 Emergency</div>
                      <div className="text-white/60 text-sm">Call anytime for urgent water damage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-eco-primary" />
                  <h4 className="text-white font-semibold">Service Areas</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Hollywood', 'Miami', 'Fort Lauderdale',
                    'Boca Raton', 'West Palm Beach', 'Pembroke Pines',
                    'Miramar', 'Coral Springs', 'Davie', 'Florida Keys',
                  ].map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" data-animate="slide-right">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 md:p-8 space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="(305) 123-4567"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-eco-primary"
                  >
                    <option value="" className="bg-tech-slate">Select a service</option>
                    <option value="inspection" className="bg-tech-slate">Free Mold Inspection</option>
                    <option value="remediation" className="bg-tech-slate">Mold Remediation</option>
                    <option value="water" className="bg-tech-slate">Water Damage Restoration</option>
                    <option value="roof" className="bg-tech-slate">Roof Protection</option>
                    <option value="thermal" className="bg-tech-slate">Thermal Leak Detection</option>
                    <option value="other" className="bg-tech-slate">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your situation..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-eco-primary hover:bg-eco-hover text-white font-bold py-6 text-lg rounded-xl hover:shadow-glow transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-white/40 text-xs text-center">
                  By submitting, you agree to be contacted by AA Mold Hunters Services LLC.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
