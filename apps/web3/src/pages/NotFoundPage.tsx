import { Link } from 'react-router'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-tech-navy flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold text-eco-primary">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-white/60 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link to="/">
          <Button className="bg-eco-primary hover:bg-eco-hover text-white px-8 py-6 text-lg font-semibold rounded-xl">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
