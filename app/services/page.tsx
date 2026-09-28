import type { Metadata } from 'next'
import { services } from '@/lib/site-data'
import { ServicesHero } from '@/components/services/services-hero'
import { DetailedServiceCard } from '@/components/services/detailed-service-card'
import { CustomSolutions } from '@/components/services/custom-solutions'

export const metadata: Metadata = {
  title: 'IT & Software Development Services | Royal IT Solution',
  description:
    'Royal IT Solution provides professional software engineering, web development, application development and IT solutions.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6">
          {services.map((service, index) => (
            <DetailedServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.detailedDescription}
              features={service.features}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <CustomSolutions />
    </>
  )
}
