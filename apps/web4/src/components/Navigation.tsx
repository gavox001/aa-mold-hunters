"use client";

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/routing'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#credentials', label: 'Credentials' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    setIsScrolled(window.scrollY > 50)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      if (!mounted) return false
      return pathname === '/' && window.location.hash === href.substring(1)
    }
    return pathname === href
  }

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background shadow-lg border-b border-border'
          : 'bg-background border-b border-transparent'
      }`}
      style={{ top: 'var(--web4-announcement-height, 0px)' }}
      suppressHydrationWarning
      role="banner"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isScrolled ? 'Navigation scrolled and sticky' : 'Navigation at top of page'}
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-glow-sm transition-shadow">
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'text-foreground bg-foreground/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <DarkModeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-foreground/10"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-background border-border p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="p-6 border-b border-border">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-foreground font-bold block">
                          AA Mold Hunters
                        </span>
                        <span className="text-primary text-xs">
                          Services LLC
                        </span>
                      </div>
                    </Link>
                  </div>
                  {/* Mobile Nav Links */}
                  <nav className="flex-1 p-6">
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`block px-4 py-3 rounded-lg transition-all ${
                              isActive(link.href)
                                ? 'text-foreground bg-foreground/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* Mobile Footer Controls */}
                  <div className="p-6 border-t border-border flex items-center justify-center gap-4">
                    <LanguageSwitcher />
                    <DarkModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}