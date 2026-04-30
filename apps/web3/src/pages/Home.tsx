import { Hero } from '@/sections/Hero'
import { UrgencyBanner } from '@/sections/UrgencyBanner'
import { AboutUs } from '@/sections/AboutUs'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { Credentials } from '@/sections/Credentials'
import { Gallery } from '@/sections/Gallery'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/sections/FAQ'
import { AIEstimator } from '@/sections/AIEstimator'
import { Contact } from '@/sections/Contact'

export function HomePage() {
  return (
    <>
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
    </>
  )
}
