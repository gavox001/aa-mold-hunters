import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, CheckCircle, FileText, Shield, Star } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: 'IICRC Certified',
    description: 'Institute of Inspection Cleaning and Restoration Certification',
    number: 'MRS4359',
  },
  {
    icon: Shield,
    title: 'Florida Licensed',
    description: 'Florida Department of Business & Professional Regulation',
    number: '70014072',
  },
  {
    icon: Star,
    title: 'BBB Accredited',
    description: 'Better Business Bureau A+ Rating',
    number: 'Accredited',
  },
  {
    icon: FileText,
    title: 'EPA Guidelines',
    description: 'Full compliance with EPA mold remediation guidelines',
    number: 'Compliant',
  },
  {
    icon: CheckCircle,
    title: 'OSHA Certified',
    description: 'Occupational Safety and Health Administration standards',
    number: 'Certified',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'General liability and workers compensation coverage',
    number: 'Active',
  },
];

export function Credentials() {
  const containerRef = useScrollAnimation();

  return (
    <section
      id="credentials"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-navy overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eco-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Certified to <span className="text-eco-primary">Protect</span> Your Home
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              When you hire AA Mold Hunters, you're choosing certified professionals backed by industry-leading credentials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-eco-primary/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-eco-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-eco-primary/30 transition-all">
                    <cred.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cred.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {cred.description}
                    </p>
                    <div className="mt-3 inline-flex items-center px-3 py-1 bg-eco-primary/20 rounded-full">
                      <span className="text-eco-primary text-xs font-semibold">
                        Reg: {cred.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
