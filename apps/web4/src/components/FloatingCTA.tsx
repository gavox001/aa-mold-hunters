"use client";

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 600px)
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted || !isVisible) return null

  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 transition-all duration-300 ease-out flex ${isExpanded ? 'translate-x-0' : 'translate-x-[calc(100%-48px)] sm:translate-x-[calc(100%-56px)]'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-stretch bg-primary rounded-l-2xl shadow-[-8px_0_30px_rgba(0,0,0,0.15)] border border-primary/20 border-r-0 overflow-hidden backdrop-blur-md">
        <button 
          className="w-12 sm:w-14 flex items-center justify-center shrink-0 bg-primary/95 text-primary-foreground focus:outline-none hover:bg-primary transition-colors touch-target-padded"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Call Us"
        >
          <Phone className={`w-5 h-5 sm:w-6 sm:h-6 ${isExpanded ? '' : 'animate-pulse'}`} />
        </button>
        
        <div className="flex flex-col justify-center px-5 py-4 whitespace-nowrap border-l border-white/10 bg-primary/90">
          <span className="text-xs font-bold text-primary-foreground/80 uppercase tracking-wider mb-0.5">
            24/7 Emergency
          </span>
          <a href="tel:+13058135922" className="text-lg sm:text-xl font-bold text-white hover:text-white/90 transition-colors">
            (305) 813-5922
          </a>
          <Button 
            asChild
            size="sm" 
            className="mt-3 bg-white text-primary hover:bg-zinc-100 w-full font-bold shadow-md rounded-xl"
          >
            <a href="tel:+13058135922">Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}