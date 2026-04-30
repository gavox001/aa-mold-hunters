import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, ClipboardCheck, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Reach Out to Us',
    description:
      'Call, message, or fill out our form. We will schedule your free inspection right away—usually within 24 hours.',
    color: 'from-eco-primary/20 to-eco-primary/5',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Get Your Free Inspection',
    description:
      'Our certified team checks for hidden damage using pro tools—thermal cameras, moisture meters, and air quality sensors.',
    color: 'from-eco-hover/20 to-eco-hover/5',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Receive Your Action Plan',
    description:
      'You get a clear, fast plan to fix the issue based on what your home really needs—including insurance documentation.',
    color: 'from-eco-dark/20 to-eco-dark/5',
  },
];

export function Process() {
  const containerRef = useScrollAnimation();

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-slate overflow-hidden"
    >
      <div className="absolute inset-0 bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Your <span className="text-eco-primary">3-Step</span> Solution
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Real solutions to stop damage and protect your home's value.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative group"
                data-animate="fade-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-eco-primary/50 to-transparent" />
                    <ArrowRight className="absolute right-0 -top-2 w-4 h-4 text-eco-primary/50" />
                  </div>
                )}

                <div className="glass-card p-8 h-full hover:border-eco-primary/40 transition-all group-hover:shadow-glow/20">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-eco-primary to-eco-hover flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
                  >
                    <step.icon className="w-7 h-7 text-eco-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
