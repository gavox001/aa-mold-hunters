import { Link } from 'react-router'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Search, Droplets, Shield, CheckCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Free Inspection',
    description: 'We conduct a thorough visual inspection, moisture mapping, and thermal imaging to identify all problem areas.',
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Detailed Assessment',
    description: 'Receive a comprehensive report with photos, test results, and a clear remediation plan with transparent pricing.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Professional Remediation',
    description: 'Our certified team contains, removes, and treats mold using EPA-approved methods and industrial-grade equipment.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Verification & Guarantee',
    description: 'Post-remediation testing confirms mold levels are safe. We back our work with a satisfaction guarantee.',
  },
]

export function Process() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-slate overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eco-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              From <span className="text-eco-primary">Detection</span> to Resolution
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              A systematic approach that delivers consistent results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="glass-card p-6 h-full hover:border-eco-primary/40 transition-all duration-300">
                  <div className="text-5xl font-bold text-eco-primary/20 mb-4">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-eco-primary/20 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-eco-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-animate="fade-up">
            <p className="text-white/60 mb-6">
              Concerned about mold? Don't wait for it to spread.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-eco-primary hover:bg-eco-hover text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all">
                  Schedule Free Inspection
                </Button>
              </Link>
              <Link to="tel:+13058135922">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (305) 813-5922
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
