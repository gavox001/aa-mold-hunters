import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Shield, Users, Award, Clock } from 'lucide-react'
import { team } from '@/assets/images'

export function AboutUs() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-navy overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-animate="fade-up">
              <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                South Florida's Most <span className="text-eco-primary">Trusted</span> Mold Experts
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                For over 15 years, AA Mold Hunters has protected South Florida homes from the hidden dangers of mold and water damage. Our certified technicians combine cutting-edge technology with proven remediation techniques to deliver results that exceed expectations.
              </p>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                We understand that mold isn't just an eyesore—it's a health hazard that can compromise your family's wellbeing. That's why we respond faster, inspect thoroughness, and remediate completely.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, number: '15+', label: 'Years Experience' },
                  { icon: Users, number: '5,000+', label: 'Homes Protected' },
                  { icon: Award, number: '100%', label: 'Satisfaction Rate' },
                  { icon: Clock, number: '24/7', label: 'Emergency Response' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-eco-primary/20 flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-eco-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-animate="slide-right">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={team}
                  alt="AA Mold Hunters Team"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-navy/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-eco-primary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Licensed & Insured</div>
                    <div className="text-white/60 text-sm">FL License #Mold-12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
