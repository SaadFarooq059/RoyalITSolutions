import { TechBackground } from '@/components/site/tech-background'
import { EyebrowBadge } from '@/components/site/eyebrow-badge'
import { FadeIn } from '@/components/site/motion'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description: string
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <TechBackground />
      <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-6 px-6 py-20 text-center sm:py-24">
        <FadeIn className="flex flex-col items-center gap-6">
          <EyebrowBadge>{eyebrow}</EyebrowBadge>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[58px]">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
