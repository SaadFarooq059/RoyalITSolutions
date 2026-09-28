import type { SVGProps } from 'react'

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.13 4.3 15.06 4.2 13.8 4.2c-2.6 0-4.3 1.55-4.3 4.4V10.5H7v3h2.5V21h4z" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.5 10.25h2.88V19H5.5v-8.75Zm5.13 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.39V19h-2.87v-4.13c0-.99-.02-2.26-1.38-2.26-1.38 0-1.6 1.08-1.6 2.19V19h-2.87v-8.75Z" />
    </svg>
  )
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 5h2.4l-5.24 6 6.17 8.4h-4.83l-3.78-5.16L9.02 19.4H6.6l5.6-6.4L6.3 5h4.95l3.42 4.7L18.9 5Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedInIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]
