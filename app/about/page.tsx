import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { WhoWeAre } from '@/components/about/who-we-are'
import { MissionVision } from '@/components/about/mission-vision'
import { Values } from '@/components/about/values'
import { Approach } from '@/components/about/approach'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'About Royal IT Solution',
  description:
    'Royal IT Solution is a technology company focused on delivering reliable software engineering and IT solutions for businesses.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <WhoWeAre />
      <MissionVision />
      <Values />
      <Approach />

      <CTASection
        title="Ready to Work With a Trusted Technology Partner?"
        description="Let's talk about how Royal IT Solution can support your next technology project."
        primary={{ label: 'Start a Conversation', href: '/contact' }}
        secondary={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  )
}
