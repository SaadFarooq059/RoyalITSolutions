import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfoCard } from '@/components/contact/contact-info-card'
import { MapPlaceholder } from '@/components/contact/map-placeholder'

export const metadata: Metadata = {
  title: 'Contact Royal IT Solution',
  description:
    'Tell us about your project, requirements or technology challenges and our team will get back to you.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something Together."
        description="Tell us about your project, requirements or technology challenges and our team will get back to you."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <ContactInfoCard />
          </div>

          <div className="mt-8">
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </>
  )
}
