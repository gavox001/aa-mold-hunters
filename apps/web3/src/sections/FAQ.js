import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
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
];
export function FAQ() {
    const containerRef = useScrollAnimation();
    return (_jsxs("section", { id: "faq", ref: containerRef, className: "relative py-20 md:py-32 bg-tech-navy overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-1/2 h-full bg-eco-primary/5 blur-3xl" }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", "data-animate": "fade-up", children: [_jsx("span", { className: "text-eco-primary font-semibold text-sm uppercase tracking-wider", children: "FAQ" }), _jsxs("h2", { className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: ["Frequently Asked ", _jsx("span", { className: "text-eco-primary", children: "Questions" })] })] }), _jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", "data-animate": "stagger", children: faqs.map((faq, i) => (_jsxs(AccordionItem, { value: `item-${i}`, className: "glass-card px-6", children: [_jsx(AccordionTrigger, { className: "text-white hover:text-eco-primary text-left", children: faq.question }), _jsx(AccordionContent, { className: "text-white/70", children: faq.answer })] }, i))) })] }) })] }));
}
//# sourceMappingURL=FAQ.js.map