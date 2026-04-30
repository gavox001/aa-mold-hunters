import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Award, CheckCircle, FileCheck, Star } from 'lucide-react';
const credentials = [
    {
        icon: Shield,
        title: 'EPA Guidelines Compliant',
        description: 'We follow all EPA guidelines for mold remediation, ensuring safe and effective treatment.',
    },
    {
        icon: Award,
        title: 'IICRC Certified',
        description: 'Our technicians are IICRC certified in water damage restoration and mold remediation.',
    },
    {
        icon: FileCheck,
        title: 'State Licensed',
        description: 'Fully licensed in the state of Florida for mold assessment and remediation services.',
    },
    {
        icon: CheckCircle,
        title: 'Insurance Approved',
        description: 'We work directly with all major insurance providers and can assist with claims.',
    },
    {
        icon: Star,
        title: '5-Star Rated',
        description: 'Consistently rated 5 stars on Google, Yelp, and HomeAdvisor by hundreds of customers.',
    },
    {
        icon: Shield,
        title: 'Warranty Provided',
        description: 'All work is backed by our comprehensive warranty against mold recurrence.',
    },
];
export function Credentials() {
    const containerRef = useScrollAnimation();
    return (_jsxs("section", { id: "credentials", ref: containerRef, className: "relative py-20 md:py-32 bg-tech-navy overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-1/3 h-full bg-eco-primary/5 blur-3xl" }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", "data-animate": "fade-up", children: [_jsx("span", { className: "text-eco-primary font-semibold text-sm uppercase tracking-wider", children: "Credentials" }), _jsxs("h2", { className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: ["Certified ", _jsx("span", { className: "text-eco-primary", children: "Excellence" })] }), _jsx("p", { className: "mt-4 text-white/60 max-w-2xl mx-auto text-lg", children: "Rest easy knowing you're working with South Florida's most qualified mold specialists." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", "data-animate": "stagger", children: credentials.map((cred, i) => (_jsxs("div", { className: "glass-card p-6 hover:border-eco-primary/40 transition-all duration-300", children: [_jsx("div", { className: "w-14 h-14 rounded-xl bg-eco-primary/20 flex items-center justify-center mb-4", children: _jsx(cred.icon, { className: "w-7 h-7 text-eco-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: cred.title }), _jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: cred.description })] }, i))) }), _jsx("div", { className: "mt-16 glass-card p-8", "data-animate": "fade-up", children: _jsxs("div", { className: "grid md:grid-cols-3 gap-8 items-center", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-eco-primary", children: "A+" }), _jsx("div", { className: "text-white/60 mt-1", children: "BBB Rating" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-eco-primary", children: "5.0" }), _jsx("div", { className: "text-white/60 mt-1", children: "Google Rating" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-eco-primary", children: "500+" }), _jsx("div", { className: "text-white/60 mt-1", children: "5-Star Reviews" })] })] }) })] }) })] }));
}
//# sourceMappingURL=Credentials.js.map