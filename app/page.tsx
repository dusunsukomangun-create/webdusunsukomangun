import { AboutSection } from '@/components/about-section'
import { ActivitiesSection } from '@/components/activities-section'
import { ArtsSection } from '@/components/arts-section'
import { FacilitiesSection } from '@/components/facilities-section'
import { GeographySection } from '@/components/geography-section'
import { HeroSection } from '@/components/hero-section'
import { HopesSection } from '@/components/hopes-section'
import { LeadersSection } from '@/components/leaders-section'
import { MapSection } from '@/components/map-section'
import { PopulationSection } from '@/components/population-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNavbar } from '@/components/site-navbar'

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
        <ArtsSection />
        <ActivitiesSection />
        <FacilitiesSection />
        <LeadersSection />
        <HopesSection />
      </main>
      <SiteFooter />
    </>
  )
}
