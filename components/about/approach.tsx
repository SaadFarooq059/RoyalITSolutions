import { Search, PenTool, Code2, TestTube2, Rocket, LifeBuoy } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/site/motion'

const steps = [
  { icon: Search, title: 'Understand' },
  { icon: PenTool, title: 'Design' },
  { icon: Code2, title: 'Engineer' },
  { icon: TestTube2, title: 'Test' },
  { icon: Rocket, title: 'Deliver' },
  { icon: LifeBuoy, title: 'Support' },
]

export function Approach() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="How We Work" />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem
              key={step.title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_20px_40px_-24px_rgba(0,102,230,0.3)]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <step.icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-base font-bold text-navy">{step.title}</h3>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
