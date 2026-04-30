import { Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = React.useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse-glow">
      <div className="relative">
        <Button
          asChild
          className="h-14 w-14 rounded-full bg-eco-primary hover:bg-eco-hover shadow-glow p-0"
        >
          <a href="tel:+13058135922">
            <Phone className="w-6 h-6 text-white" />
          </a>
        </Button>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}

import React from 'react'
