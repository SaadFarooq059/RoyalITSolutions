import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { TechStrip } from '@/components/home/tech-strip'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ProcessSection } from '@/components/home/process-section'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'Royal IT Solution | Software Engineering & IT Solutions',
  description:
    'Royal IT Solution provides professional software engineering, web development, application development and IT solutions.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection
        title="Have a Technology Project in Mind?"
        description="Let's discuss how Royal IT Solution can help transform your idea into a reliable digital solution."
        primary={{ label: 'Start a Conversation', href: '/contact' }}
        secondary={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
