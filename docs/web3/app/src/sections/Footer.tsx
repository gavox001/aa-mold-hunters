import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Free Mold Inspection', href: '#services' },
    { label: 'Mold Remediation', href: '#services' },
    { label: 'Water Damage Restoration', href: '#services' },
    { label: 'Roof Protection', href: '#services' },
    { label: 'Thermal Detection', href: '#services' },
    { label: 'Shrinkwrap & Tarps', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'AI Estimator', href: '#estimator' },
  ],
  areas: [
    'Hollywood, FL',
    'Miami, FL',
    'Fort Lauderdale, FL',
    'Boca Raton, FL',
    'West Palm Beach, FL',
    'Florida Keys',
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-tech-navy border-t border-white/10">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white font-bold block leading-tight">
                    AA Mold Hunters
                  </span>
                  <span className="text-eco-primary text-xs">Services LLC</span>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                South Florida's trusted mold inspection and remediation experts. 
                Licensed, insured, and available 24/7 for emergencies.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+13058135922"
                  className="flex items-center gap-3 text-white/80 hover:text-eco-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(305) 813-5922</span>
                </a>
                <a
                  href="mailto:info@aamoldhunters.com"
                  className="flex items-center gap-3 text-white/80 hover:text-eco-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@aamoldhunters.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">6260 Johnson St, Ste B<br />Hollywood, FL 33024</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-eco-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-eco-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-white font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3">
                {footerLinks.areas.map((area, i) => (
                  <li key={i} className="text-white/60 text-sm">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} AA Mold Hunters Services LLC. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-eco-primary hover:bg-eco-primary/20 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-eco-primary hover:bg-eco-primary/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-eco-primary hover:bg-eco-primary/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-eco-primary flex items-center justify-center text-white hover:bg-eco-hover hover:shadow-glow transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
