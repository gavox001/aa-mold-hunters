import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Users, Target, Heart } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Homes Inspected' },
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '24/7', label: 'Emergency Service' },
  { number: '10+', label: 'Years Experience' },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description:
      'We believe in honest assessments. If there is no mold, we will tell you. No unnecessary treatments, ever.',
  },
  {
    icon: Users,
    title: 'Family Safety',
    description:
      'Your family\'s health is our top priority. We use eco-friendly, non-toxic remediation methods.',
  },
  {
    icon: Target,
    title: 'Precision Detection',
    description:
      'Advanced thermal imaging and moisture meters to find hidden mold others miss.',
  },
  {
    icon: Heart,
    title: 'Community Care',
    description:
      'Proudly serving South Florida homeowners with personalized, compassionate service.',
  },
];

export function AboutUs() {
  const containerRef = useScrollAnimation();

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-navy overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              South Florida's Trusted{' '}
              <span className="text-eco-primary">Mold Experts</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              AA Mold Hunters Services LLC is a licensed and insured mold
              remediation company based in Hollywood, FL. We specialize in
              comprehensive mold inspection, testing, and remediation for
              residential and commercial properties across South Florida.
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
            data-animate="stagger"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center hover:border-eco-primary/50 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-eco-primary">
                  {stat.number}
                </div>
                <div className="mt-2 text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div data-animate="slide-left" className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/team.jpg"
                  alt="AA Mold Hunters Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-navy/80 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-eco-primary flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Licensed</div>
                    <div className="text-white/60 text-sm">& Insured</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <div data-animate="fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Core Values
                </h3>
                <p className="text-white/60 mb-8">
                  We combine cutting-edge technology with old-fashioned customer
                  service to deliver results you can trust.
                </p>
              </div>

              <div className="space-y-4" data-animate="stagger">
                {values.map((value, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-eco-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-eco-primary/30 transition-all">
                      <value.icon className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {value.title}
                      </h4>
                      <p className="text-white/60 text-sm mt-1">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
