import {
  UrgencyBanner,
  Services,
  Process,
  Credentials,
  Contact,
} from "@/components/sections";
import { Layout } from "@/components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      <UrgencyBanner />
      <Services />
      <Process />
      <Credentials />
      <Contact />
    </Layout>
  );
}
