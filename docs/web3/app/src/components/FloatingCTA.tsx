import { useEffect, useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Floating CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-tech-navy/95 backdrop-blur-xl border-t border-white/10 p-4 md:hidden transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center gap-3">
          <a
            href="tel:+13058135922"
            className="flex-1 flex items-center justify-center gap-2 bg-eco-primary hover:bg-eco-hover text-white font-bold py-3 rounded-xl transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-alert-amber hover:bg-amber-500 text-white font-bold py-3 rounded-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Free Quote</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Action Button */}
      <div
        className={`fixed bottom-8 right-8 z-40 hidden md:flex flex-col items-end gap-3 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {isExpanded && (
          <>
            <a
              href="tel:+13058135922"
              className="flex items-center gap-3 px-4 py-3 bg-eco-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-glow transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>(305) 813-5922</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 px-4 py-3 bg-alert-amber text-white rounded-xl font-semibold shadow-lg hover:shadow-glow-amber transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Free Inspection</span>
            </a>
          </>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
            isExpanded
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-eco-primary text-white hover:bg-eco-hover hover:shadow-glow'
          }`}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </button>
      </div>

      {/* Emergency Banner */}
      <div
        className={`fixed top-20 left-0 right-0 z-30 bg-alert-amber text-tech-navy py-2 px-4 text-center font-semibold text-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <span className="flex items-center justify-center gap-2">
          24/7 Emergency Service Available —
          <a href="tel:+13058135922" className="underline">
            Call (305) 813-5922
          </a>
        </span>
      </div>
    </>
  );
}
