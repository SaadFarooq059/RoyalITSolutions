'use client'

import { TechBackground } from '@/components/site/tech-background'
import { EyebrowBadge } from '@/components/site/eyebrow-badge'
import { FadeIn } from '@/components/site/motion'
import Timeline from '@/components/ui/timeline'

export function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <TechBackground />
        <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-6 px-6 py-20 text-center sm:py-24">
          <FadeIn className="flex flex-col items-center gap-6">
            <EyebrowBadge>About Royal IT Solution</EyebrowBadge>
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[58px]">
              Technology Expertise.
              <br />
              Business-Focused Solutions.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
              Royal IT Solution is a technology company focused on delivering reliable software
              engineering and IT solutions for businesses. Keep scrolling to see our journey.
            </p>
          </FadeIn>
        </div>
      </section>

      <Timeline
        title="Our Journey"
        periodLabel="2015 — 2026"
        backgroundColor="var(--color-navy, #07111f)"
        textColor="#ffffff"
        mutedTextColor="rgba(255,255,255,0.6)"
        activeColor="var(--color-brand-light, #009bff)"
        duration={1.2}
      />
    </>
  )
}
