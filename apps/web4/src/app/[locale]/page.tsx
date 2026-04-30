import {
  Hero,
  AboutUs,
  Services,
  Process,
  Credentials,
  Gallery,
  Testimonials,
  FAQ,
  AIEstimator,
  Contact,
} from "@/components/sections";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Credentials />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AIEstimator />
      <Contact />
    </Layout>
  );
}
