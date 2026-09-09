import { AboutSection } from '@/components/about-section'
import { ArtsSection } from '@/components/arts-section'
import { GeographySection } from '@/components/geography-section'
import { HeroSection } from '@/components/hero-section'
import { FacilitiesSection } from '@/components/facilities-section'
import { MapSection } from '@/components/map-section'
import { PopulationSection } from '@/components/population-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNavbar } from '@/components/site-navbar'
import { TpqSection } from '@/components/tpq-section'
import { TraditionSection } from '@/components/tradition-section'

export default function Page() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GeographySection />
        <MapSection />
        <PopulationSection />
        <TraditionSection />
        <TpqSection />
        <FacilitiesSection />
        <ArtsSection />
      </main>
      <SiteFooter />
    </>
  )
}
