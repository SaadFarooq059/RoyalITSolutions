'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SiteButton } from '@/components/site/site-button'
import { cn } from '@/lib/utils'

const serviceOptions = [
  'Custom Software',
  'Web Development',
  'Mobile App',
  'Cloud & Infrastructure',
  'IT Consulting',
  'System Integration',
  'Other',
]

type FormState = {
  fullName: string
  companyName: string
  email: string
  phone: string
  service: string
  details: string
}

const initialState: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  details: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): Record<string, string> {
    const next: Record<string, string> = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required.'
    if (!form.companyName.trim()) next.companyName = 'Company name is required.'
    if (!form.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    if (!form.service) next.service = 'Please select a service.'
    if (!form.details.trim() || form.details.trim().length < 10) {
      next.details = 'Please share a few details about your project.'
    }
    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setForm(initialState)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-bold text-navy">Message Sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          Thank you for reaching out. Our team will review your project details and get back to
          you shortly.
        </p>
        <SiteButton variant="secondary" onClick={() => setSubmitted(false)} className="mt-2">
          Send Another Message
        </SiteButton>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-8 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className={cn('h-11', errors.fullName && 'border-destructive')}
            placeholder="Jane Doe"
          />
          {errors.fullName ? <p className="text-xs text-destructive">{errors.fullName}</p> : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={form.companyName}
            onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
            className={cn('h-11', errors.companyName && 'border-destructive')}
            placeholder="Acme Inc."
          />
          {errors.companyName ? (
            <p className="text-xs text-destructive">{errors.companyName}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={cn('h-11', errors.email && 'border-destructive')}
            placeholder="jane@company.com"
          />
          {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={cn('h-11', errors.phone && 'border-destructive')}
            placeholder="+92 300 0000000"
          />
          {errors.phone ? <p className="text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select
          value={form.service}
          onValueChange={(value) => setForm((f) => ({ ...f, service: value ?? '' }))}
        >
          <SelectTrigger
            id="service"
            className={cn('h-11 w-full', errors.service && 'border-destructive')}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service ? <p className="text-xs text-destructive">{errors.service}</p> : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea
          id="details"
          value={form.details}
          onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
          className={cn('min-h-32', errors.details && 'border-destructive')}
          placeholder="Tell us about your project, goals and timeline..."
        />
        {errors.details ? <p className="text-xs text-destructive">{errors.details}</p> : null}
      </div>

      <SiteButton type="submit" size="lg" className="mt-2 w-full sm:w-fit">
        Send Message
        <Send className="size-4" />
      </SiteButton>
    </form>
  )
}
