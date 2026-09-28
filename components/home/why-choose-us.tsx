import { TechBackground } from '@/components/site/tech-background'
import { SectionHeading } from '@/components/site/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/site/motion'

const features = [
  {
    number: '01',
    title: 'Tailored Solutions',
    description:
      'We design technology around your requirements instead of forcing your business into generic solutions.',
  },
  {
    number: '02',
    title: 'Modern Engineering',
    description: 'We use modern development practices and technologies to build reliable products.',
  },
  {
    number: '03',
    title: 'Scalable Architecture',
    description: 'Solutions designed to support your business as it grows.',
  },
  {
    number: '04',
    title: 'Long-Term Support',
    description: 'We focus on maintainable technology and long-term partnerships.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <TechBackground variant="dark" />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-light/15 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeading
          variant="dark"
          title="Engineering Solutions With Business In Mind"
        />

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem
              key={feature.number}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-3xl font-extrabold text-brand-light/50">
                {feature.number}
              </span>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{feature.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
