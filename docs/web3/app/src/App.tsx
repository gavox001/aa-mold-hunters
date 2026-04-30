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
  return (
    <div className="min-h-screen bg-tech-navy text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <UrgencyBanner />
        <AboutUs />
        <Services />
        <Process />
        <Credentials />
        <Gallery />
        <Testimonials />
        <FAQ />
        <AIEstimator />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster 
        position="bottom-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: '#1E293B',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}
