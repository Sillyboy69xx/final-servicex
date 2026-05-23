import { HeroHome } from '@/components/home/hero-home'
import { FeaturedServices } from '@/components/home/featured-services'
import { OverlandingShowcase } from '@/components/home/overlanding-showcase'
import { PhilosophySection } from '@/components/home/philosophy-section'
import { ServicesList } from '@/components/home/services-list'
import { ContactStrip } from '@/components/home/contact-strip'

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <FeaturedServices />
      <OverlandingShowcase />
      <PhilosophySection />
      <ServicesList />
      <ContactStrip />
    </>
  )
}
