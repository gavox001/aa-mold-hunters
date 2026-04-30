import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function BeforeAfterGallery({ images }) {
    return (_jsx("div", { className: "grid md:grid-cols-3 gap-6", children: images.map((item, i) => (_jsxs("div", { className: "glass-card overflow-hidden", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: item.after, alt: `${item.title} - After`, className: "w-full h-64 object-cover" }), _jsx("div", { className: "absolute top-4 left-4 px-3 py-1 bg-eco-primary text-white text-xs font-bold rounded-full", children: "AFTER" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-white font-semibold", children: item.title }), _jsx("p", { className: "text-white/60 text-sm mt-1", children: "Mold Remediation Complete" })] })] }, i))) }));
}
export { BeforeAfterGallery };
//# sourceMappingURL=carousel.js.map