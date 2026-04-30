import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function UrgencyBanner() {
    return (_jsx("div", { className: "bg-alert-amber py-4", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 text-tech-navy font-semibold", children: [_jsx(AlertTriangle, { className: "w-5 h-5" }), _jsx("span", { children: "Mold growth can spread in as little as 24-48 hours after water damage." }), _jsx("span", { className: "hidden sm:inline", children: "|" }), _jsx("span", { children: "Don't wait - call now for emergency service:" }), _jsx("a", { href: "tel:+13058135922", children: _jsxs(Button, { size: "sm", className: "bg-tech-navy hover:bg-tech-slate text-white", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "(305) 813-5922"] }) })] }) }) }));
}
//# sourceMappingURL=UrgencyBanner.js.map