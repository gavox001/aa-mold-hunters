"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I know if I have mold in my home?',
    answer: 'Mold often hides in places you cannot see - behind walls, under floors, in crawl spaces. Signs include a musty odor, visible discoloration on walls or ceilings, recent water damage, or unexplained health symptoms like allergies or respiratory issues. The only way to be certain is a professional inspection with moisture mapping and thermal imaging.',
  },
  {
    question: 'Is mold dangerous to my health?',
    answer: 'Yes, certain types of mold can cause serious health issues, especially for children, elderly, and those with respiratory conditions or compromised immune systems. Even non-toxic mold can trigger allergies and asthma attacks. Any mold growth should be addressed promptly by professionals.',
  },
  {
    question: 'Will my insurance cover mold remediation?',
    answer: 'Many homeowners insurance policies cover mold remediation if it results from a covered peril like sudden water damage from a burst pipe or storm damage. However, gradual water damage or flooding from lack of maintenance may not be covered. We work directly with insurance companies and can help you navigate your claim.',
  },
  {
    question: 'How long does mold remediation take?',
    answer: 'The duration depends on the extent of the contamination. Small areas (1-2 rooms) typically take 1-3 days. Whole-house remediation can take 1-2 weeks. We provide a detailed timeline after our initial inspection.',
  },
  {
    question: 'What makes AA Mold Hunters different?',
    answer: 'We combine cutting-edge technology (thermal imaging, moisture mapping, AI estimators) with certified expertise and genuine customer care. Our 100% satisfaction guarantee, transparent pricing, and 24/7 emergency response set us apart. We don\'t just remove mold - we identify and eliminate the source to prevent recurrence.',
  },
  {
    question: 'Do you offer free inspections?',
    answer: 'Yes! Our initial inspection is completely free. We use thermal imaging and moisture meters to thoroughly assess your property at no cost to you. You only pay if you choose to proceed with remediation.',
  },
]

export function FAQ() {
  const containerRef = useScrollAnimation()

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3" data-animate="stagger">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl bg-card border border-border px-5"
              >
                <AccordionTrigger className="text-foreground hover:text-primary text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}