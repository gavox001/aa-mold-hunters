import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CheckCircle, Phone, MapPin, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
export function Hero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
    });
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.fromTo('.hero-badge', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
                .fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
                .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
                .fromTo('.hero-features', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
                .fromTo('.hero-cta', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.2')
                .fromTo('.hero-form', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6');
        }, heroRef);
        return () => ctx.revert();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.zipCode) {
            toast.error('Please fill in all fields');
            return;
        }
        toast.success('Inspection request submitted! We will contact you within 24 hours.');
        setFormData({ name: '', phone: '', email: '', zipCode: '' });
    };
    return (_jsxs("section", { id: "home", ref: heroRef, className: "relative min-h-screen flex items-center overflow-hidden bg-tech-navy", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("img", { src: "/images/hero-home.jpg", alt: "South Florida Home", className: "w-full h-full object-cover opacity-40" }), _jsx("div", { className: "absolute inset-0 bg-gradient-hero" })] }), _jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(6)].map((_, i) => (_jsx("div", { className: "absolute w-2 h-2 bg-eco-primary/30 rounded-full animate-float", style: {
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${4 + i * 0.5}s`,
                    } }, i))) }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24 md:py-32", children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto", children: [_jsxs("div", { ref: contentRef, className: "space-y-6 md:space-y-8", children: [_jsxs("div", { className: "hero-badge inline-flex items-center gap-2 px-4 py-2 glass rounded-full", children: [_jsx(MapPin, { className: "w-4 h-4 text-eco-primary" }), _jsx("span", { className: "text-white/80 text-sm font-medium", children: "Serving South Florida" })] }), _jsxs("h1", { className: "hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight", children: ["#1 Mold Inspection &", ' ', _jsx("span", { className: "text-eco-primary", children: "Remediation" }), _jsx("br", { className: "hidden sm:block" }), " in South Florida"] }), _jsx("p", { className: "hero-subtitle text-lg md:text-xl text-white/70 max-w-xl", children: "We help homeowners detect hidden moisture, stop mold growth, and protect their homes before damage spreads. Your free inspection is 100% covered by most insurances." }), _jsx("div", { className: "hero-features flex flex-wrap gap-4", children: [
                                        { icon: Shield, text: 'Licensed & Insured' },
                                        { icon: Clock, text: '24/7 Emergency Response' },
                                        { icon: Award, text: 'Certified Technicians' },
                                    ].map((feature, i) => (_jsxs("div", { className: "flex items-center gap-2 text-white/80", children: [_jsx(feature.icon, { className: "w-5 h-5 text-eco-primary" }), _jsx("span", { className: "text-sm font-medium", children: feature.text })] }, i))) }), _jsxs("div", { className: "hero-cta flex flex-wrap gap-4", children: [_jsx("a", { href: "#services", onClick: (e) => {
                                                e.preventDefault();
                                                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                                            }, children: _jsx(Button, { className: "bg-eco-primary hover:bg-eco-hover text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all", children: "View Our Services" }) }), _jsx("a", { href: "tel:+13058135922", children: _jsxs(Button, { variant: "outline", className: "border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Call Now"] }) })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-6 pt-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-white/60 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-eco-primary" }), _jsx("span", { children: "Free Inspection" })] }), _jsxs("div", { className: "flex items-center gap-2 text-white/60 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-eco-primary" }), _jsx("span", { children: "Insurance Accepted" })] }), _jsxs("div", { className: "flex items-center gap-2 text-white/60 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-eco-primary" }), _jsx("span", { children: "Satisfaction Guaranteed" })] })] })] }), _jsx("div", { ref: formRef, className: "hero-form", children: _jsxs("div", { className: "glass-card p-6 md:p-8 space-y-6", children: [_jsxs("div", { className: "text-center space-y-2", children: [_jsx("h3", { className: "text-2xl font-bold text-white", children: "Get a Free Inspection" }), _jsx("p", { className: "text-white/60 text-sm", children: "Fill out the form and we'll contact you within 24 hours" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx(Input, { placeholder: "Full Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12" }), _jsx(Input, { placeholder: "Phone Number", type: "tel", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), className: "bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12" }), _jsx(Input, { placeholder: "Email Address", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12" }), _jsx(Input, { placeholder: "ZIP Code", value: formData.zipCode, onChange: (e) => setFormData({ ...formData, zipCode: e.target.value }), className: "bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12" }), _jsx(Button, { type: "submit", className: "w-full bg-alert-amber hover:bg-amber-500 text-white font-bold py-6 text-lg rounded-xl hover:shadow-glow-amber transition-all", children: "SCHEDULE FREE INSPECTION" })] }), _jsx("p", { className: "text-white/40 text-xs text-center", children: "By submitting, you agree to receive communications from AA Mold Hunters. Reply STOP to cancel." })] }) })] }) })] }));
}
//# sourceMappingURL=Hero.js.map