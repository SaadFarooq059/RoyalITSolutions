import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react'
import { contactInfo } from '@/lib/site-data'

const items = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Globe, label: 'Website', value: contactInfo.website, href: `https://${contactInfo.website}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
  { icon: MapPin, label: 'Address', value: contactInfo.address },
]

export function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-navy p-8 text-white sm:p-9">
      <div>
        <h3 className="text-xl font-bold">Royal IT Solution</h3>
        <p className="mt-1 text-sm text-white/55">
          We&apos;d love to hear about your project.
        </p>
      </div>

      <ul className="flex flex-col gap-5">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light">
              <item.icon className="size-4.5" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium tracking-wide text-white/45">
                {item.label}
              </span>
              {item.href ? (
                <a href={item.href} className="text-sm font-medium text-white hover:text-brand-light">
                  {item.value}
                </a>
              ) : (
                <span className="text-sm font-medium leading-relaxed text-white">
                  {item.value}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-3.5 border-t border-white/10 pt-6">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light">
          <Clock className="size-4.5" />
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium tracking-wide text-white/45">Business Hours</span>
          <span className="text-sm font-medium text-white">Monday – Friday</span>
          <span className="text-sm font-medium text-white/70">9:00 AM – 6:00 PM</span>
        </div>
      </div>
    </div>
  )
}
