import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#estimator', label: 'AI Estimator' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-tech-navy/90 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+13058135922"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all hover:shadow-glow"
            >
              <Phone className="w-4 h-4" />
              <span>(305) 813-5922</span>
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-tech-navy border-white/10 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">
                          AA Mold Hunters
                        </span>
                        <span className="text-eco-primary text-xs">
                          Services LLC
                        </span>
                      </div>
                    </div>
                  </div>
                  <nav className="flex-1 p-6">
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(link.href);
                            }}
                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-6 border-t border-white/10">
                    <a
                      href="tel:+13058135922"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(305) 813-5922</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
