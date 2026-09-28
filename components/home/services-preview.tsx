import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/site-data'
import { SectionHeading } from '@/components/site/section-heading'
import { ServicePreviewCard } from '@/components/site/service-preview-card'
import { StaggerGroup } from '@/components/site/motion'
import GatewayFlow from '@/components/ui/gateway-flow'

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="relative overflow-hidden rounded-3xl bg-black">
          <div className="absolute inset-0" aria-hidden="true">
            <GatewayFlow mode="dark" density={0.9} className="h-full w-full" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"
          />
          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20">
            <SectionHeading
              variant="dark"
              eyebrow="What We Do"
              title="Technology Solutions That Move Businesses Forward"
              description="From software development to complete digital solutions, we help businesses turn ideas into reliable technology."
            />
          </div>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicePreviewCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-[#0056c4]"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
