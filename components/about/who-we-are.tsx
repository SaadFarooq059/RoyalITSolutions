import { Code2, Cloud, Layers } from 'lucide-react'
import { TechBackground } from '@/components/site/tech-background'
import { FadeIn } from '@/components/site/motion'

function AbstractVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy">
      <TechBackground variant="dark" />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-6 p-10">
        {[
          { icon: Code2, label: 'Engineering', offset: '-translate-x-6' },
          { icon: Layers, label: 'Architecture', offset: 'translate-x-4' },
          { icon: Cloud, label: 'Cloud Native', offset: '-translate-x-2' },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex w-full max-w-[220px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm ${item.offset}`}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand/20 text-brand-light">
              <item.icon className="size-4.5" />
            </span>
            <span className="text-sm font-semibold text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-2">
        <FadeIn>
          <AbstractVisual />
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Engineering Technology That Creates Value
          </h2>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Technology should solve real business problems. At Royal IT Solution, we combine
            software engineering expertise with practical business thinking to develop
            solutions that are reliable, scalable and easy to maintain.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Our approach starts with understanding the client&apos;s requirements before
            selecting technologies or building solutions.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
