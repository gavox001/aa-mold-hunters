import { Outlet, Link, useLocation } from 'react-router'
import { Navigation } from '@/components/Navigation'
import { FloatingCTA } from '@/components/FloatingCTA'
import { Footer } from '@/sections/Footer'
import { Toaster } from 'sonner'

export function Layout() {
  return (
    <div className="min-h-screen bg-tech-navy text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#1E293B',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}
