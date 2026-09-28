import { Target, Eye } from 'lucide-react'
import { FadeIn } from '@/components/site/motion'

const cards = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To deliver reliable technology solutions that help businesses operate, innovate and grow.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To become a trusted technology partner for organizations seeking modern, scalable and practical digital solutions.',
  },
]

export function MissionVision() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <FadeIn
            key={card.title}
            delay={i * 0.1}
            className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-9 sm:p-10"
          >
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand/8 text-brand">
              <card.icon className="size-7" strokeWidth={1.8} />
            </span>
            <h3 className="text-2xl font-bold text-navy">{card.title}</h3>
            <p className="text-base leading-relaxed text-slate">{card.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
