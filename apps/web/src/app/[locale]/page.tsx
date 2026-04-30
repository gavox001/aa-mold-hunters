import {
  WeatherWidget,
  Navbar,
  Hero,
  DreamHome,
  About,
  Services,
  Process,
  OurExpert,
  BeforeAfter,
  WhyYouNeed,
  Qualification,
  Testimonials,
  CostCalculator,
  FAQ,
  ServiceAreas,
  FreeInspectionForm,
  Footer,
  StickyMobileCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <WeatherWidget />
      <Navbar />
      <Hero />
      <DreamHome />
      <About />
      <Services />
      <Process />
      <OurExpert />
      <BeforeAfter />
      <WhyYouNeed />
      <Qualification />
      <Testimonials />
      <CostCalculator />
      <FAQ />
      <ServiceAreas />
      <FreeInspectionForm />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
