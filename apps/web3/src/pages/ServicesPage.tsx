import { Services } from '@/sections/Services'
import { UrgencyBanner } from '@/sections/UrgencyBanner'
import { Process } from '@/sections/Process'
import { Credentials } from '@/sections/Credentials'
import { Contact } from '@/sections/Contact'

export function ServicesPage() {
  return (
    <>
      <UrgencyBanner />
      <Services />
      <Process />
      <Credentials />
      <Contact />
    </>
  )
}
