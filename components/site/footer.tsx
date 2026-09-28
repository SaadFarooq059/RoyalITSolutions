'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { LogoFull } from '@/components/site/logo'
import { socialLinks } from '@/components/site/social-links'
import { contactInfo } from '@/lib/site-data'

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Software Development', href: '/services' },
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'Cloud Solutions', href: '/services' },
      { label: 'IT Consulting', href: '/services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Footer() {
  return (
    <footer className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1280px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Brand panel */}
          <motion.div
            variants={itemVariants}
            className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-navy p-8 md:w-1/3 md:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand/25 blur-3xl"
            />

            <div className="relative z-10">
              <LogoFull />
            </div>

            <div className="relative z-10 mt-10 flex flex-col gap-6 md:mt-0">
              <h3 className="text-lg font-bold leading-snug text-white">
                Engineering Technology That Moves Your Business Forward
              </h3>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-light hover:text-brand-light"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>

              <p className="text-xs text-white/45">
                &copy; {new Date().getFullYear()} Royal IT Solution. All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Links + newsletter panel */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col justify-between gap-10 rounded-2xl border border-border bg-card p-8 md:w-2/3 md:p-12"
          >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
              {footerColumns.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h4 className="text-sm font-semibold tracking-wide text-foreground">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-brand"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
                <h4 className="text-sm font-semibold tracking-wide text-foreground">Contact</h4>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-brand">
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                    <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-brand">
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                    Islamabad, Pakistan
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border pt-8">
              <h4 className="text-sm font-semibold tracking-wide text-foreground">
                Stay in the loop
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy/90"
                >
                  Subscribe
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
