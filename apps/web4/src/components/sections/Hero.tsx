"use client";

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Phone, MapPin, Shield, Clock, Award, Star, CheckCircle, ThumbsUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroHome } from '@/assets/images'



export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'expo.out'

    const tl = gsap.timeline({ defaults: { ease } })

    tl.fromTo(
      '.hero-badge',
      { y: -30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 }
    )
    .fromTo(
      '.hero-title',
      { y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9 },
      '-=0.3'
    )
    .fromTo(
      '.hero-subtitle',
      { y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )
    .fromTo(
      '.hero-cta',
      { y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.3'
    )
    .fromTo(
      '.hero-social-proof',
      { y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.2'
    )
    .fromTo(
      '.floating-card',
      { y: 40, scale: 0.85, rotateY: 15 },
      { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 0.8, stagger: { each: 0.2, from: 'random' } },
      '-=0.4'
    )

    gsap.to('.animate-float-delayed', {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8,
    })

  const cards = heroRef.current?.querySelectorAll('.floating-card')
  cards?.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'expo.out',
        zIndex: 30,
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: 'expo.out',
        zIndex: 20,
      })
    })
  })
  }, { scope: heroRef })

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroHome.src}
          alt="South Florida Home"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-background/40 sm:bg-black/20 dark:sm:bg-background/20 md:bg-gradient-to-r md:from-black/80 dark:md:from-background/80 md:via-black/30 dark:md:via-background/30 md:to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px]">

          <div className="lg:col-span-6 xl:col-span-7 space-y-6 md:space-y-8 mt-10 lg:mt-0">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-white/90 dark:text-foreground/90 text-sm font-medium">
                Serving South Florida
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white dark:text-foreground leading-[1.1] tracking-tight drop-shadow-md">
              #1 Mold Inspection &{' '}
              <span className="text-primary relative inline-block">
                Remediation
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br className="hidden sm:block" /> in South Florida
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-white/90 dark:text-foreground/90 font-medium max-w-xl leading-relaxed drop-shadow-sm">
              We help homeowners detect hidden moisture, stop mold growth, and
              protect their homes before damage spreads. Your free inspection is
              100% covered by most insurances.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <a href="#contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-7 text-base sm:text-lg font-semibold rounded-2xl shadow-[0_8px_30px_rgb(var(--primary)_/_0.2)] hover:shadow-[0_8px_30px_rgb(var(--primary)_/_0.4)] transition-all touch-target-padded duration-300 transform hover:-translate-y-1">
                  Book Free Inspection
                </Button>
              </a>
              <a href="#services" onClick={scrollToServices}>
                <Button className="bg-slate-950/40 hover:bg-slate-950/60 text-white border border-white/10 backdrop-blur-md px-8 py-7 text-base sm:text-lg font-semibold rounded-2xl transition-all touch-target-padded duration-300 transform hover:-translate-y-1 shadow-xl">
                  View Our Services
                </Button>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
              <a href="tel:+13058135922" className="group flex items-center gap-4 px-2 py-2 rounded-2xl transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0 animate-pulse">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white dark:text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                    (305) 813-5922
                  </span>
                  <span className="text-xs text-white/70 dark:text-foreground/70 font-medium">
                    Takes 30s &bull; We usually respond same day
                  </span>
                </div>
              </a>
            </div>

            <div className="hero-social-proof flex flex-col items-start gap-3 pt-8 border-t border-border/20">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white ml-2">4.9/5 Rating</span>
                </div>
                <span className="text-sm font-medium text-white/80">
                  Trusted by 1,000+ South Florida Homeowners
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  IICRC Certified
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 relative hidden lg:block h-full min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              
              <div className="floating-card animate-float-delayed z-20 w-full max-w-sm">
                <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -ml-10 -mb-10" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="text-xl font-bold text-white">Trust & Guarantees</h3>
                      <ThumbsUp className="w-6 h-6 text-primary" />
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-primary/20 p-1.5 rounded-full shrink-0">
                          <Clock className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Arrive within 60 mins</p>
                          <p className="text-white/60 text-xs mt-0.5">Rapid emergency dispatch</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-primary/20 p-1.5 rounded-full shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Direct Insurance Billing</p>
                          <p className="text-white/60 text-xs mt-0.5">We handle the paperwork</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-primary/20 p-1.5 rounded-full shrink-0">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Free Inspection</p>
                          <p className="text-white/60 text-xs mt-0.5">No hidden fees or obligations</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-white p-1 rounded-full">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="text-white text-xs font-bold">Google Reviews</p>
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-white font-bold text-sm">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 opacity-100 translate-y-[2px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-card">
          <path d="M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
