import { TechBackground } from '@/components/site/tech-background'
import { SiteButton } from '@/components/site/site-button'

export function CustomSolutions() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <TechBackground variant="dark" />
      <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Don&apos;t See Exactly What You Need?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Every business has different technology requirements. We can design a custom
          solution around your specific goals.
        </p>
        <SiteButton href="/contact" size="lg" className="mt-2">
          Discuss Your Project
        </SiteButton>
      </div>
    </section>
  )
}
