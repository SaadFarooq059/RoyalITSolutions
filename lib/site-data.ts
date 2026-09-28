import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Lightbulb,
  Network,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  shortDescription: string
  detailedDescription: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription:
      'Scalable software solutions designed around your business requirements.',
    detailedDescription:
      'We design and develop custom software tailored to unique operational and business requirements.',
    icon: Code2,
    features: [
      'Custom business applications',
      'SaaS platforms',
      'Backend systems',
      'API development',
      'Automation solutions',
      'Database architecture',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Modern, responsive and high-performance websites and web applications.',
    detailedDescription:
      'We build fast, modern websites and web applications that represent your business well and perform reliably.',
    icon: Globe,
    features: [
      'Corporate websites',
      'Web applications',
      'Customer portals',
      'E-commerce solutions',
      'Responsive development',
      'Performance optimization',
    ],
  },
  {
    slug: 'mobile-application-development',
    title: 'Mobile Application Development',
    shortDescription:
      'Intuitive mobile applications designed for modern users and businesses.',
    detailedDescription:
      'We build intuitive iOS, Android and cross-platform mobile applications designed for modern users and businesses.',
    icon: Smartphone,
    features: [
      'iOS applications',
      'Android applications',
      'Cross-platform apps',
      'API integrations',
      'Business mobile apps',
    ],
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    shortDescription: 'Secure and scalable infrastructure for modern applications.',
    detailedDescription:
      'We design and manage secure, scalable cloud infrastructure that keeps your applications fast and reliable.',
    icon: Cloud,
    features: [
      'Cloud deployment',
      'Server configuration',
      'Infrastructure architecture',
      'Application hosting',
      'Backup solutions',
      'Performance optimization',
    ],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription:
      'Technology strategy and technical guidance to help businesses make better decisions.',
    detailedDescription:
      'We provide technology strategy and technical guidance to help businesses make better, more confident decisions.',
    icon: Lightbulb,
    features: [
      'Technology strategy',
      'Software architecture',
      'Digital transformation',
      'Technology selection',
      'Infrastructure planning',
    ],
  },
  {
    slug: 'system-integration',
    title: 'System Integration',
    shortDescription:
      'Connect your applications, APIs and business systems into one efficient ecosystem.',
    detailedDescription:
      'We connect your applications, APIs and business systems into one efficient, well-integrated ecosystem.',
    icon: Network,
    features: [
      'REST API integration',
      'Third-party services',
      'Payment systems',
      'CRM integrations',
      'Business automation',
      'Data integration',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const contactInfo = {
  email: 'info@royalitsolution.net',
  website: 'www.royalitsolution.net',
  phone: '+92 346 6103653',
  phoneHref: '+923466103653',
  address: '25-A, 11 Central Shabbir Shareef Road, G-11/1 Islamabad 44000, Pakistan',
  hours: 'Monday – Friday, 9:00 AM – 6:00 PM',
}
