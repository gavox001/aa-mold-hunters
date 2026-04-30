import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#credentials', label: 'Credentials' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
    { href: '#estimator', label: 'AI Estimator' },
    { href: '#contact', label: 'Contact' },
];
export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-tech-navy/90 backdrop-blur-xl shadow-lg border-b border-white/10'
            : 'bg-transparent'}`, children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", children: [_jsxs("a", { href: "#home", onClick: (e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }, className: "flex items-center gap-2 group", children: [_jsx("div", { className: "w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center group-hover:shadow-glow transition-shadow", children: _jsx(Shield, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-white font-bold text-lg leading-tight", children: "AA Mold Hunters" }), _jsx("span", { className: "text-eco-primary text-xs leading-tight", children: "Services LLC" })] })] }), _jsx("nav", { className: "hidden lg:flex items-center gap-1", children: navLinks.map((link) => (_jsx("a", { href: link.href, onClick: (e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }, className: "px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all", children: link.label }, link.href))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("a", { href: "tel:+13058135922", className: "hidden md:flex items-center gap-2 px-4 py-2 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all hover:shadow-glow", children: [_jsx(Phone, { className: "w-4 h-4" }), _jsx("span", { children: "(305) 813-5922" })] }), _jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(SheetTrigger, { asChild: true, className: "lg:hidden", children: _jsx(Button, { variant: "ghost", size: "icon", className: "text-white hover:bg-white/10", children: isOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) }) }), _jsx(SheetContent, { side: "right", className: "w-[300px] bg-tech-navy border-white/10 p-0", children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsx("div", { className: "p-6 border-b border-white/10", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-10 h-10 rounded-lg bg-eco-primary flex items-center justify-center", children: _jsx(Shield, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("span", { className: "text-white font-bold block", children: "AA Mold Hunters" }), _jsx("span", { className: "text-eco-primary text-xs", children: "Services LLC" })] })] }) }), _jsx("nav", { className: "flex-1 p-6", children: _jsx("ul", { className: "space-y-2", children: navLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: link.href, onClick: (e) => {
                                                                    e.preventDefault();
                                                                    scrollToSection(link.href);
                                                                }, className: "block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all", children: link.label }) }, link.href))) }) }), _jsx("div", { className: "p-6 border-t border-white/10", children: _jsxs("a", { href: "tel:+13058135922", className: "flex items-center justify-center gap-2 w-full px-4 py-3 bg-eco-primary hover:bg-eco-hover text-white rounded-lg font-semibold transition-all", children: [_jsx(Phone, { className: "w-4 h-4" }), _jsx("span", { children: "(305) 813-5922" })] }) })] }) })] })] })] }) }) }));
}
//# sourceMappingURL=Navigation.js.map