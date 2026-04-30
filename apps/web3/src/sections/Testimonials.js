import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';
const testimonials = [
    {
        name: 'Maria Rodriguez',
        location: 'Hollywood, FL',
        rating: 5,
        text: "AA Mold Hunters saved my home. They found mold I didn't even know existed behind my bathroom walls. Fast, professional, and the team was incredibly thorough. Highly recommend!",
    },
    {
        name: 'James Thompson',
        location: 'Miami, FL',
        rating: 5,
        text: "After Hurricane Irma, I had water damage everywhere. This team responded within hours and had everything dried out before mold could grow. Incredible emergency service.",
    },
    {
        name: 'Sarah Chen',
        location: 'Fort Lauderdale, FL',
        rating: 5,
        text: "The AI estimator was spot-on with the quote, and the final bill was exactly what they predicted. No surprise charges. The remediation team was friendly and explained everything.",
    },
    {
        name: 'Robert Williams',
        location: 'Boca Raton, FL',
        rating: 5,
        text: "I've used AA Mold Hunters twice now over the years. Consistent quality, honest pricing, and they stand behind their work. They're the only company I trust with my family's home.",
    },
];
export function Testimonials() {
    const containerRef = useScrollAnimation();
    return (_jsxs("section", { id: "testimonials", ref: containerRef, className: "relative py-20 md:py-32 bg-tech-slate overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-eco-primary/10 via-transparent to-transparent" }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", "data-animate": "fade-up", children: [_jsx("span", { className: "text-eco-primary font-semibold text-sm uppercase tracking-wider", children: "Testimonials" }), _jsxs("h2", { className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: ["What Our ", _jsx("span", { className: "text-eco-primary", children: "Customers" }), " Say"] })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", "data-animate": "stagger", children: testimonials.map((testimonial, i) => (_jsxs("div", { className: "glass-card p-6 hover:border-eco-primary/40 transition-all duration-300", children: [_jsx(Quote, { className: "w-10 h-10 text-eco-primary/30 mb-4" }), _jsxs("p", { className: "text-white/80 leading-relaxed mb-6", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: testimonial.name }), _jsx("div", { className: "text-white/60 text-sm", children: testimonial.location })] }), _jsx("div", { className: "flex gap-1", children: [...Array(testimonial.rating)].map((_, j) => (_jsx(Star, { className: "w-4 h-4 fill-eco-primary text-eco-primary" }, j))) })] })] }, i))) })] }) })] }));
}
//# sourceMappingURL=Testimonials.js.map