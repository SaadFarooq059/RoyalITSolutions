'use client'

import { Search, Compass, Code2, TestTube2, Rocket, LifeBuoy, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/site/motion'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand objectives and requirements.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define architecture, technology and roadmap.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the solution using modern engineering practices.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Test',
    description: 'Perform comprehensive testing and quality assurance.',
    icon: TestTube2,
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy the solution into production.',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Support',
    description: 'Maintain, improve and scale the platform.',
    icon: LifeBuoy,
  },
]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Our Process"
          title="From Idea to Implementation"
          description="A clear, structured process that takes your project from first conversation to a live, reliable product."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isRowEnd = (index + 1) % 3 === 0
            const isLast = index === steps.length - 1
            return (
              <StaggerItem key={step.number} className="group relative">
                <div className="relative flex h-full flex-col gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5">
                  <div className="flex items-start justify-between">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-accent text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-4xl font-black text-navy/[0.06] transition-colors duration-300 group-hover:text-brand/10">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>
                </div>
                {!isLast && !isRowEnd && (
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-slate lg:flex"
                  >
                    <ArrowRight className="size-3.5" strokeWidth={2} />
                  </div>
                )}
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
