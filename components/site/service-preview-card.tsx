import type { LucideIcon } from 'lucide-react'
import { StaggerItem } from '@/components/site/motion'

export function ServicePreviewCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <StaggerItem className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_24px_48px_-24px_rgba(0,102,230,0.35)]">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon className="size-6" strokeWidth={1.8} />
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-slate">{description}</p>
    </StaggerItem>
  )
}
