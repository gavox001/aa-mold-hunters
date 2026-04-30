import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/#process', label: 'Process' },
  { to: '/#credentials', label: 'Credentials' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1)
    }
    return location.pathname === path
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-tech-navy/90 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
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
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  isActive(link.to)
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="tel:+13058135922"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all hover:shadow-glow"
            >
              <Phone className="w-4 h-4" />
              <span>(305) 813-5922</span>
            </Link>

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
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
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
                    </Link>
                  </div>
                  <nav className="flex-1 p-6">
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            onClick={(e) => handleNavClick(e, link.to)}
                            className={`block px-4 py-3 rounded-lg transition-all ${
                              isActive(link.to)
                                ? 'text-white bg-white/10'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-6 border-t border-white/10">
                    <Link
                      to="tel:+13058135922"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(305) 813-5922</span>
                    </Link>
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
