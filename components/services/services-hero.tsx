'use client'

import { Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { MoireField } from '@/components/ui/moire-field'
import { EyebrowBadge } from '@/components/site/eyebrow-badge'
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/site/motion'

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Client Retention', value: '95%' },
  { label: 'Years of Experience', value: '10+' },
]

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <MoireField
        color="var(--color-brand-light)"
        pitch={22}
        intensity={0.5}
        fade={0.35}
        drift={0.6}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/70 via-navy/40 to-navy" />

      <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
        <FadeIn className="flex flex-col items-center gap-6">
          <span className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner">
            <Cpu className="size-6 text-white" strokeWidth={1.5} />
          </span>

          <EyebrowBadge variant="dark">Our Expertise</EyebrowBadge>

          <h1 className="text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Technology Services Built Around Your Business
          </h1>

          <p className="max-w-2xl text-base font-light leading-relaxed text-slate-400 sm:text-lg">
            From concept to deployment, Royal IT Solution provides software engineering and
            technology services that help businesses build reliable digital products.
          </p>

          <Link
            href="/contact"
            className="group mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            Start a Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <StaggerGroup className="mt-10 grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
              <span className="text-xs font-light uppercase tracking-widest text-slate-500">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
