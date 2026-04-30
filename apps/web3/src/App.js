import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from 'sonner';
import { Navigation } from '@/components/Navigation';
import { FloatingCTA } from '@/components/FloatingCTA';
import { Hero } from '@/sections/Hero';
import { AboutUs } from '@/sections/AboutUs';
import { Services } from '@/sections/Services';
import { Process } from '@/sections/Process';
import { Credentials } from '@/sections/Credentials';
import { Gallery } from '@/sections/Gallery';
import { Testimonials } from '@/sections/Testimonials';
import { UrgencyBanner } from '@/sections/UrgencyBanner';
import { FAQ } from '@/sections/FAQ';
import { AIEstimator } from '@/sections/AIEstimator';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
export default function App() {
    return (_jsxs("div", { className: "min-h-screen bg-tech-navy text-white overflow-x-hidden", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(UrgencyBanner, {}), _jsx(AboutUs, {}), _jsx(Services, {}), _jsx(Process, {}), _jsx(Credentials, {}), _jsx(Gallery, {}), _jsx(Testimonials, {}), _jsx(FAQ, {}), _jsx(AIEstimator, {}), _jsx(Contact, {})] }), _jsx(Footer, {}), _jsx(FloatingCTA, {}), _jsx(Toaster, { position: "bottom-right", theme: "dark", toastOptions: {
                    style: {
                        background: '#1E293B',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff',
                    },
                } })] }));
}
//# sourceMappingURL=App.js.map