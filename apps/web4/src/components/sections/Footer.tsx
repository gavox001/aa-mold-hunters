"use client";

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
    <footer className="bg-background border-t border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-lg leading-tight">
                    AA Mold Hunters
                  </span>
                  <span className="text-primary text-xs leading-tight">
                    Services LLC
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                South Florida&apos;s trusted mold inspection and remediation specialists.
                Protecting homes and families since 2009. Licensed, insured, and available 24/7 for emergencies.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" aria-label="Follow us on LinkedIn" className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h2 className="text-foreground font-semibold mb-4 sr-only">Services</h2>
              <ul className="space-y-2">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h2 className="text-foreground font-semibold mb-4 sr-only">Company</h2>
              <ul className="space-y-2">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h2 className="text-foreground font-semibold mb-4 sr-only">Contact</h2>
              <ul className="space-y-2">
                {footerLinks.contact.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              {new Date().getFullYear()} AA Mold Hunters Services LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}