import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, Facebook, Instagram, Linkedin } from 'lucide-react';
const footerLinks = {
    services: [
        { label: 'Free Mold Inspection', href: '#services' },
        { label: 'Water Damage Restoration', href: '#services' },
        { label: 'Mold Remediation', href: '#services' },
        { label: 'Roof Protection', href: '#services' },
        { label: 'Thermal Leak Detection', href: '#services' },
    ],
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Process', href: '#process' },
        { label: 'Credentials', href: '#credentials' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'FAQ', href: '#faq' },
    ],
    contact: [
        { label: '(305) 813-5922', href: 'tel:+13058135922' },
        { label: 'info@aamoldhunters.com', href: 'mailto:info@aamoldhunters.com' },
        { label: '6260 Johnson St, Ste B', href: '#contact' },
        { label: 'Hollywood, FL 33024', href: '#contact' },
    ],
};
export function Footer() {
    return (_jsx("footer", { className: "bg-tech-navy border-t border-white/10", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-12", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx("div", { className: "w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center", children: _jsx(Shield, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-white font-bold text-lg leading-tight", children: "AA Mold Hunters" }), _jsx("span", { className: "text-eco-primary text-xs leading-tight", children: "Services LLC" })] })] }), _jsx("p", { className: "text-white/60 text-sm leading-relaxed mb-6", children: "South Florida's trusted mold inspection and remediation specialists. Protecting homes and families since 2009. Licensed, insured, and available 24/7 for emergencies." }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "#", className: "w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors", children: _jsx(Facebook, { className: "w-5 h-5 text-white" }) }), _jsx("a", { href: "#", className: "w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors", children: _jsx(Instagram, { className: "w-5 h-5 text-white" }) }), _jsx("a", { href: "#", className: "w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-eco-primary/20 transition-colors", children: _jsx(Linkedin, { className: "w-5 h-5 text-white" }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-4", children: "Services" }), _jsx("ul", { className: "space-y-2", children: footerLinks.services.map((link, i) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-white/60 text-sm hover:text-eco-primary transition-colors", children: link.label }) }, i))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-4", children: "Company" }), _jsx("ul", { className: "space-y-2", children: footerLinks.company.map((link, i) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-white/60 text-sm hover:text-eco-primary transition-colors", children: link.label }) }, i))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-4", children: "Contact" }), _jsx("ul", { className: "space-y-2", children: footerLinks.contact.map((link, i) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-white/60 text-sm hover:text-eco-primary transition-colors", children: link.label }) }, i))) })] })] }), _jsxs("div", { className: "mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4", children: [_jsx("p", { className: "text-white/40 text-sm", children: "2024 AA Mold Hunters Services LLC. All rights reserved." }), _jsxs("div", { className: "flex gap-6 text-sm text-white/40", children: [_jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }), _jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Terms of Service" })] })] })] }) }) }));
}
//# sourceMappingURL=Footer.js.map