import { TechBackground } from '@/components/site/tech-background'
import { SiteButton } from '@/components/site/site-button'

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <TechBackground variant="dark" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[100px]"
      />
      <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px]">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          {description}
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <SiteButton href={primary.href} size="lg">
            {primary.label}
          </SiteButton>
          <SiteButton href={secondary.href} variant="dark" size="lg">
            {secondary.label}
          </SiteButton>
        </div>
      </div>
    </section>
  )
}
