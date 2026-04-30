import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calculator, Home, Droplets, Thermometer, ArrowRight, RefreshCcw, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const questions = [
    {
        id: 'property_type',
        question: 'What type of property?',
        icon: Home,
        options: [
            { label: 'Single Family Home', value: 'single_family', factor: 1 },
            { label: 'Condo / Apartment', value: 'condo', factor: 0.8 },
            { label: 'Commercial', value: 'commercial', factor: 1.5 },
            { label: 'Multi-Family', value: 'multi', factor: 1.3 },
        ],
    },
    {
        id: 'damage_type',
        question: 'What type of damage?',
        icon: Droplets,
        options: [
            { label: 'Mold Only', value: 'mold', factor: 2000 },
            { label: 'Water Damage', value: 'water', factor: 3000 },
            { label: 'Mold + Water', value: 'both', factor: 4500 },
            { label: 'Storm / Roof', value: 'storm', factor: 3500 },
        ],
    },
    {
        id: 'area_size',
        question: 'Estimated affected area?',
        icon: Thermometer,
        options: [
            { label: 'Small (1 room)', value: 'small', factor: 1 },
            { label: 'Medium (2-3 rooms)', value: 'medium', factor: 1.8 },
            { label: 'Large (4+ rooms)', value: 'large', factor: 3 },
            { label: 'Whole House', value: 'whole', factor: 5 },
        ],
    },
    {
        id: 'urgency',
        question: 'How urgent is this?',
        icon: AlertTriangle,
        options: [
            { label: 'Emergency (24h)', value: 'emergency', factor: 1.3 },
            { label: 'Urgent (1-3 days)', value: 'urgent', factor: 1.1 },
            { label: 'Standard (1 week)', value: 'standard', factor: 1 },
            { label: 'Planning ahead', value: 'planning', factor: 0.9 },
        ],
    },
];
export function AIEstimator() {
    const containerRef = useScrollAnimation();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const handleAnswer = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        }
        else {
            setShowResult(true);
        }
    };
    const calculateEstimate = () => {
        const propertyType = questions[0].options.find(o => o.value === answers.property_type);
        const damageType = questions[1].options.find(o => o.value === answers.damage_type);
        const areaSize = questions[2].options.find(o => o.value === answers.area_size);
        const urgency = questions[3].options.find(o => o.value === answers.urgency);
        const base = (damageType?.factor ?? 2000);
        const multiplier = (propertyType?.factor ?? 1) * (areaSize?.factor ?? 1) * (urgency?.factor ?? 1);
        const low = Math.round(base * multiplier * 0.8);
        const high = Math.round(base * multiplier * 1.2);
        return { low, high };
    };
    const reset = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
    };
    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + (showResult ? 1 : 0)) / questions.length) * 100;
    return (_jsxs("section", { id: "estimator", ref: containerRef, className: "relative py-20 md:py-32 bg-gradient-to-b from-tech-navy to-tech-slate overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-eco-primary/5 blur-3xl" }), _jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", "data-animate": "fade-up", children: [_jsx("span", { className: "text-eco-primary font-semibold text-sm uppercase tracking-wider", children: "AI Tool" }), _jsxs("h2", { className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: ["Cost ", _jsx("span", { className: "text-eco-primary", children: "Estimator" })] }), _jsx("p", { className: "mt-4 text-white/60 max-w-2xl mx-auto text-lg", children: "Get an instant estimate for your mold remediation or water damage restoration project." })] }), _jsxs("div", { className: "glass-card p-6 md:p-10", "data-animate": "scale", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex justify-between text-sm text-white/60 mb-2", children: [_jsx("span", { children: "Progress" }), _jsx("span", { children: showResult ? 'Complete' : `Step ${currentStep + 1} of ${questions.length}` })] }), _jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-eco-primary to-eco-hover rounded-full transition-all duration-500", style: { width: `${showResult ? 100 : progress}%` } }) })] }), !showResult ? (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-eco-primary/20 flex items-center justify-center", children: currentQuestion && _jsx(currentQuestion.icon, { className: "w-6 h-6 text-eco-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-white", children: currentQuestion.question })] }), _jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: currentQuestion.options.map((option, i) => (_jsxs("button", { onClick: () => handleAnswer(currentQuestion.id, option.value), className: "flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-eco-primary/50 hover:bg-eco-primary/10 transition-all text-left group", children: [_jsx("div", { className: "w-8 h-8 rounded-full border-2 border-white/20 group-hover:border-eco-primary flex items-center justify-center flex-shrink-0", children: _jsx("div", { className: "w-3 h-3 rounded-full bg-eco-primary opacity-0 group-hover:opacity-100 transition-opacity" }) }), _jsx("span", { className: "text-white font-medium", children: option.label }), _jsx(ArrowRight, { className: "w-4 h-4 text-white/40 group-hover:text-eco-primary ml-auto transition-colors" })] }, i))) })] })) : (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-eco-primary/20 flex items-center justify-center mx-auto mb-4", children: _jsx(Calculator, { className: "w-8 h-8 text-eco-primary" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Estimated Cost Range" }), _jsxs("div", { className: "text-4xl md:text-5xl font-bold text-eco-primary", children: ["$", calculateEstimate().low.toLocaleString(), " - $", calculateEstimate().high.toLocaleString()] }), _jsx("p", { className: "text-white/60 mt-2", children: "This is an estimate. Final cost depends on inspection results." })] }), _jsxs("div", { className: "bg-white/5 rounded-xl p-6 space-y-3", children: [_jsx("h4", { className: "text-white font-semibold", children: "Your selections:" }), questions.map((q, i) => {
                                                    const answer = q.options.find(o => o.value === answers[q.id]);
                                                    return (_jsxs("div", { className: "flex items-center gap-3 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-eco-primary flex-shrink-0" }), _jsx("span", { className: "text-white/60", children: q.question }), _jsx("span", { className: "text-white font-medium ml-auto", children: answer?.label })] }, i));
                                                })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("a", { href: "#contact", className: "flex-1", children: _jsx(Button, { className: "w-full bg-eco-primary hover:bg-eco-hover text-white font-semibold py-6", children: "Get Exact Quote" }) }), _jsxs(Button, { variant: "outline", className: "border-white/20 text-white hover:bg-white/10 py-6", onClick: reset, children: [_jsx(RefreshCcw, { className: "w-4 h-4 mr-2" }), "Start Over"] })] })] }))] }), _jsx("div", { className: "mt-8 text-center", "data-animate": "fade-up", children: _jsxs("p", { className: "text-white/40 text-sm", children: [_jsx(AlertTriangle, { className: "w-4 h-4 inline mr-1" }), "This estimator provides rough figures only. A professional inspection is required for accurate pricing."] }) })] }) })] }));
}
//# sourceMappingURL=AIEstimator.js.map