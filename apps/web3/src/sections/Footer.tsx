import { Shield, Facebook, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Free Mold Inspection', href: '#services' },
    { label: 'Water Damage Restoration', href: '#services' },
    { label: 'Mold Remediation', href: '#services' },
    { label: 'Roof Protection', href: '#services' },
    { label: 'Thermal Leak Detection', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ],
  contact: [
    { label: '(305) 813-5922', href: 'tel:+13058135922' },
    { label: 'info@aamoldhunters.com', href: 'mailto:info@aamoldhunters.com' },
    { label: '6260 Johnson St, Ste B', href: '#contact' },
    { label: 'Hollywood, FL 33024', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-tech-navy border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-tight">
                    AA Mold Hunters
                  </span>
                  <span className="text-eco-primary text-xs leading-tight">
                    Services LLC
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                South Florida's trusted mold inspection and remediation specialists.
                Protecting homes and families since 2009. Licensed, insured, and available 24/7 for emergencies.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-white/60 text-sm hover:text-eco-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-white/60 text-sm hover:text-eco-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                {footerLinks.contact.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-white/60 text-sm hover:text-eco-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              2024 AA Mold Hunters Services LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
