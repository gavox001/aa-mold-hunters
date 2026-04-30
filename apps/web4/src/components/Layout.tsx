"use client";

import { Navigation } from '@/components/Navigation'
import { FloatingCTA } from '@/components/FloatingCTA'
import { Footer, UrgencyBanner } from '@/components/sections'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <UrgencyBanner />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}