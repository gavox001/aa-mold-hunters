import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function FloatingCTA() {
    const [isVisible, setIsVisible] = React.useState(true);
    if (!isVisible)
        return null;
    return (_jsx("div", { className: "fixed bottom-6 right-6 z-50 animate-pulse-glow", children: _jsxs("div", { className: "relative", children: [_jsx(Button, { asChild: true, className: "h-14 w-14 rounded-full bg-eco-primary hover:bg-eco-hover shadow-glow p-0", children: _jsx("a", { href: "tel:+13058135922", children: _jsx(Phone, { className: "w-6 h-6 text-white" }) }) }), _jsx("button", { onClick: () => setIsVisible(false), className: "absolute -top-2 -right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors", children: _jsx(X, { className: "w-4 h-4 text-white" }) })] }) }));
}
import React from 'react';
//# sourceMappingURL=FloatingCTA.js.map