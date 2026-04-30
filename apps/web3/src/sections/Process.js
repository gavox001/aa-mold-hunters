import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Droplets, Shield, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
];
export function Process() {
    const containerRef = useScrollAnimation();
    return (_jsxs("section", { id: "process", ref: containerRef, className: "relative py-20 md:py-32 bg-tech-slate overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eco-primary/10 via-transparent to-transparent" }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", "data-animate": "fade-up", children: [_jsx("span", { className: "text-eco-primary font-semibold text-sm uppercase tracking-wider", children: "Our Process" }), _jsxs("h2", { className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: ["From ", _jsx("span", { className: "text-eco-primary", children: "Detection" }), " to Resolution"] }), _jsx("p", { className: "mt-4 text-white/60 max-w-2xl mx-auto text-lg", children: "A systematic approach that delivers consistent results every time." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", "data-animate": "stagger", children: steps.map((step, i) => (_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "glass-card p-6 h-full hover:border-eco-primary/40 transition-all duration-300", children: [_jsx("div", { className: "text-5xl font-bold text-eco-primary/20 mb-4", children: step.number }), _jsx("div", { className: "w-14 h-14 rounded-xl bg-eco-primary/20 flex items-center justify-center mb-4", children: _jsx(step.icon, { className: "w-7 h-7 text-eco-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }), _jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: step.description })] }), i < steps.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2", children: _jsx("div", { className: "w-6 h-0.5 bg-eco-primary/30" }) }))] }, i))) }), _jsxs("div", { className: "mt-16 text-center", "data-animate": "fade-up", children: [_jsx("p", { className: "text-white/60 mb-6", children: "Concerned about mold? Don't wait for it to spread." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx("a", { href: "#contact", children: _jsx(Button, { className: "bg-eco-primary hover:bg-eco-hover text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all", children: "Schedule Free Inspection" }) }), _jsx("a", { href: "tel:+13058135922", children: _jsxs(Button, { variant: "outline", className: "border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Call (305) 813-5922"] }) })] })] })] }) })] }));
}
//# sourceMappingURL=Process.js.map