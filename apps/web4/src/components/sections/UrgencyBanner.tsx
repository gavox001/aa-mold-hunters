"use client";

import { useCallback, useEffect, useRef, useState } from 'react'
import { AlertTriangle, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DISMISS_KEY = 'web4:urgency-banner'
const PHONE_NUMBER = '(305) 813-5922'
const PHONE_HREF = 'tel:+13058135922'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 * 10

type BannerEventName = 'impression' | 'dismiss' | 'cta_click'

type BannerPayload = {
  event: BannerEventName
  placement: 'above_hero'
}

function setAnnouncementHeight(value: string) {
  if (typeof document === 'undefined') {
    return
  }
  document.documentElement.style.setProperty('--web4-announcement-height', value)
}

function readDismissedState() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    const storedValue = window.localStorage.getItem(DISMISS_KEY)
    if (storedValue === 'true') {
      return true
    }
  } catch {
    // Ignore storage access issues in restricted browser contexts.
  }

  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${DISMISS_KEY}=`))
    ?.split('=')[1]

  return cookieValue === 'true'
}

function persistDismissedState() {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(DISMISS_KEY, 'true')
  } catch {
    // Ignore storage access issues in restricted browser contexts.
  }

  document.cookie = `${DISMISS_KEY}=true; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`
}

function trackBannerEvent(event: BannerEventName) {
  if (typeof window === 'undefined') {
    return
  }

  const payload: BannerPayload = {
    event,
    placement: 'above_hero',
  }

  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>
  }

  analyticsWindow.dataLayer?.push({
    event: `urgency_banner_${event}`,
    bannerPlacement: 'above_hero',
  })

  window.dispatchEvent(new CustomEvent('web4:urgency-banner', { detail: payload }))
}

export function UrgencyBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const nextDismissed = readDismissedState()
    setIsDismissed(nextDismissed)
    setMounted(true)
    if (!nextDismissed) {
      setAnnouncementHeight('36px')
    }
    trackBannerEvent('impression')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      if (scrolled) {
        setAnnouncementHeight('0px')
      } else if (!isDismissed) {
        const height = bannerRef.current?.offsetHeight ?? 36
        setAnnouncementHeight(`${height}px`)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  useEffect(() => {
    if (isDismissed) {
      setAnnouncementHeight('0px')
      return
    }

    if (!mounted) {
      return
    }

    const node = bannerRef.current
    if (!node) {
      return
    }

    const updateHeight = () => {
      setAnnouncementHeight(`${node.offsetHeight}px`)
    }

    updateHeight()

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => updateHeight())
        : null

    resizeObserver?.observe(node)
    window.addEventListener('resize', updateHeight, { passive: true })

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', updateHeight)
      setAnnouncementHeight('0px')
    }
  }, [isDismissed])

  const handleDismiss = useCallback(() => {
    persistDismissedState()
    setAnnouncementHeight('0px')
    setIsDismissed(true)
    trackBannerEvent('dismiss')
  }, [])

  const handleCallClick = useCallback(() => {
    trackBannerEvent('cta_click')
  }, [])

  if (!mounted || isDismissed || isScrolled) {
    return null
  }

  return (
    <section
      aria-label="Emergency announcement"
      className="fixed inset-x-0 top-0 z-[70]"
    >
      <div
        ref={bannerRef}
        className="border-b border-border bg-accent text-accent-foreground"
      >
        <div className="px-3">
          <div className="flex h-9 items-center gap-2 py-0">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 hidden sm:block" aria-hidden="true" />

            <div className="overflow-hidden min-w-0 flex-1">
              <p className="animate-marquee whitespace-nowrap text-xs font-semibold">
                &nbsp;&nbsp;&bull;&nbsp;&nbsp; 🚨 24/7 Emergency Mold Removal - Dispatching Teams in South Florida Now &nbsp;&nbsp;&bull;&nbsp;&nbsp; 🚨 24/7 Emergency Mold Removal - Dispatching Teams in South Florida Now &nbsp;&nbsp;&bull;&nbsp;&nbsp;
              </p>
            </div>

            <a
              href={PHONE_HREF}
              onClick={handleCallClick}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white hover:bg-black/80 transition-all duration-300 text-xs font-bold whitespace-nowrap ml-2 border border-white/10 group shadow-sm"
            >
              <Phone className="h-3 w-3 group-hover:animate-pulse text-primary" aria-hidden="true" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <button
              type="button"
              onClick={handleDismiss}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent touch-target-padded"
              aria-label="Cerrar anuncio urgente"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}