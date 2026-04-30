import { AlertTriangle, Phone, Clock } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-alert-amber/20 via-alert-amber/10 to-alert-amber/20 border-y border-alert-amber/20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-alert-amber/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                <AlertTriangle className="w-7 h-7 text-alert-amber" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Mold Emergency? Act Fast!
                </h3>
                <p className="text-white/60 mt-1">
                  Mold can spread within 24-48 hours. Every hour counts.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-alert-amber">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Emergency Response</span>
              </div>
              <a
                href="tel:+13058135922"
                className="flex items-center gap-2 px-6 py-3 bg-alert-amber hover:bg-amber-500 text-tech-navy font-bold rounded-xl transition-all hover:shadow-glow-amber"
              >
                <Phone className="w-5 h-5" />
                <span>(305) 813-5922</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
