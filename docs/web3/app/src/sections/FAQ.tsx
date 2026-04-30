import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I know if I have mold in my home?',
    answer: 'Common signs include a musty odor, visible dark spots on walls or ceilings, recent water damage, or worsening allergy symptoms indoors. If you suspect mold, a professional inspection can confirm the issue and identify the source.',
  },
  {
    question: 'Is the mold inspection really free?',
    answer: 'Yes! Our initial visual mold inspection is completely free for homeowners. Most insurance policies cover the full cost of mold inspection and remediation. We handle all insurance documentation for you.',
  },
  {
    question: 'What causes mold to grow in a property?',
    answer: 'Mold develops when moisture is present for extended periods. Common causes include water leaks, flooding, roof damage, plumbing issues, high humidity levels, and poor ventilation. South Florida\'s tropical climate makes homes especially vulnerable.',
  },
  {
    question: 'Is mold dangerous to my health?',
    answer: 'Certain types of mold can negatively impact indoor air quality and may trigger allergies, respiratory issues, headaches, or other health concerns. Black mold (Stachybotrys) and Chaetomium are particularly hazardous. Professional remediation removes mold safely and restores healthy conditions.',
  },
  {
    question: 'How quickly should water damage be addressed?',
    answer: 'Water damage should be addressed immediately. If moisture is left untreated, mold can begin developing within 24 to 48 hours. Our 24/7 emergency team can respond within hours to prevent further damage.',
  },
  {
    question: 'Do you provide services for both homes and businesses?',
    answer: 'Yes. AA Mold Hunters provides mold remediation and water damage restoration services for both residential and commercial properties across South Florida, including offices, warehouses, and rental properties.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve all of South Florida including Miami-Dade County, Broward County, Palm Beach County, and the Florida Keys. Our headquarters is in Hollywood, FL.',
  },
  {
    question: 'Can mold come back after remediation?',
    answer: 'Mold can return if the underlying moisture problem is not fixed. Our remediation process focuses on identifying and addressing the source of moisture to help prevent future mold growth. We also provide recommendations for humidity control.',
  },
  {
    question: 'Do you offer emergency water damage services?',
    answer: 'Yes, we offer 24/7 emergency water damage response. If your property experiences flooding, leaks, or storm damage, early action can prevent further structural damage and mold growth. Call (305) 813-5922 anytime.',
  },
  {
    question: 'How long does mold remediation take?',
    answer: 'The duration depends on the extent of the mold growth and the size of the affected area. Small projects may take 1-2 days, while larger remediation projects can take 5-7 days. We provide a detailed timeline during our initial assessment.',
  },
];

export function FAQ() {
  const containerRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-tech-navy overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full bg-eco-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Frequently Asked <span className="text-eco-primary">Questions</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Everything you need to know about mold, remediation, and our services.
            </p>
          </div>

          <div className="space-y-4" data-animate="stagger">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass-card overflow-hidden transition-all ${
                  openIndex === i ? 'border-eco-primary/40' : ''
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        openIndex === i
                          ? 'bg-eco-primary text-white'
                          : 'bg-eco-primary/20 text-eco-primary'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-eco-primary flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
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
