import { AlertTriangle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function UrgencyBanner() {
  return (
    <div className="bg-alert-amber py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4 text-tech-navy font-semibold">
          <AlertTriangle className="w-5 h-5" />
          <span>Mold growth can spread in as little as 24-48 hours after water damage.</span>
          <span className="hidden sm:inline">|</span>
          <span>Don't wait - call now for emergency service:</span>
          <a href="tel:+13058135922">
            <Button size="sm" className="bg-tech-navy hover:bg-tech-slate text-white">
              <Phone className="w-4 h-4 mr-2" />
              (305) 813-5922
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
