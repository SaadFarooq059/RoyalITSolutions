import { ShieldCheck, Eye as EyeIcon, Lightbulb, Handshake } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/site/motion'

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'We focus on building technology that is reliable and maintainable.',
  },
  {
    icon: EyeIcon,
    title: 'Transparency',
    description: 'Clear communication throughout every stage of a project.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously evaluate technologies that can deliver better solutions.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We aim to build long-term relationships rather than simply deliver projects.',
  },
]

export function Values() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Our Values" />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem
              key={value.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <value.icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-bold text-navy">{value.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{value.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
