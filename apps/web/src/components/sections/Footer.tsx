"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Phone,
  Send,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const services = [
  "Water Mitigation",
  "Mold Remediation",
  "Roof Protection",
  "Shrinkwrap & Tarps",
  "Air Quality Testing",
  "Thermal Imaging",
];

const contact = {
  address: "Miami, FL 33172",
  phone: "(800) 458-6893",
  email: "info@aamoldhunters.com",
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const certifications = [
  "IICRC Certified",
  "BBB A+ Rated",
  "FL DBPR Licensed",
  "EPA Approved",
];

export function Footer() {
  return (
    <footer className="bg-tech-navy pt-16 pb-8 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-eco-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certification badges row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 pb-8 border-b border-white/10">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-white/80"
            >
              <CheckCircle className="w-4 h-4 text-eco-primary" />
              {cert}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - Logo & Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-eco-primary/10 ring-1 ring-eco-primary/30 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-eco-primary" />
              </div>
              <span className="text-xl font-extrabold text-white uppercase tracking-tight">
                AA Mold Hunters
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              South Florida&apos;s leading mold inspection and remediation
              company. Protecting homes and health since 2014.
            </p>

            {/* Community counter */}
            <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg glass">
              <Users className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-white/70">
                <span className="font-bold text-white">2,300+</span> neighbors
                protected
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-eco-primary hover:bg-eco-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-eco-primary font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-eco-primary transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-eco-primary/40 group-hover:bg-eco-primary transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-eco-primary font-bold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-eco-primary/60 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{contact.address}</span>
              </li>
              <li>
                <a
                  href="tel:+18004586893"
                  className="flex items-center gap-2.5 text-white/60 hover:text-eco-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-eco-primary/60 shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-eco-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-eco-primary/60 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-eco-primary font-bold text-sm uppercase tracking-widest mb-5">
              Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for tips on preventing mold and maintaining a healthy
              home.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-eco-primary/50"
              />
              <Button
                size="icon"
                className="bg-eco-primary hover:bg-eco-primary-hover text-white shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AA Mold Hunters Services. All
            Rights Reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
