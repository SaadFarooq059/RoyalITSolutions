const items = [
  'Web Development',
  'Software Engineering',
  'Cloud Solutions',
  'Mobile Apps',
  'IT Consulting',
  'System Integration',
]

export function TechStrip() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6">
        <p className="text-sm font-medium text-slate">
          Technology solutions built for modern businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-semibold tracking-wide text-navy/40 transition-colors hover:text-brand"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
