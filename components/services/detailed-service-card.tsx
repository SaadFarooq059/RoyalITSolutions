import type { LucideIcon } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/site/motion'

export function DetailedServiceCard({
  icon: Icon,
  title,
  description,
  features,
  reversed = false,
}: {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  reversed?: boolean
}) {
  return (
    <FadeIn className="rounded-3xl border border-border bg-white p-8 shadow-[0_20px_50px_-30px_rgba(7,17,31,0.15)] sm:p-10">
      <div
        className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="flex flex-col gap-4 lg:w-2/5">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand/8 text-brand">
            <Icon className="size-7" strokeWidth={1.8} />
          </div>
          <h3 className="text-2xl font-bold text-navy">{title}</h3>
          <p className="text-base leading-relaxed text-slate">{description}</p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 rounded-xl bg-surface p-3.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
              <span className="text-sm font-medium text-navy/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
