import { defineQuery } from 'next-sanity'

export const CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    client,
    clientLogo,
    category,
    featured,
    summary,
    coverImage,
    studentTalent {
      name,
      university,
      role,
      avatar
    },
    milestones[] {
      title,
      deliverable,
      escrowStatus
    },
    metrics[] {
      label,
      value
    },
    testimonial {
      quote,
      author,
      designation
    },
    publishedAt
  }
`)

export interface CaseStudy {
  _id: string
  title: string
  slug?: { current: string }
  client: string
  clientLogo?: any
  category: string
  featured?: boolean
  summary: string
  coverImage?: any
  studentTalent?: {
    name: string
    university?: string
    role?: string
    avatar?: any
  }
  milestones?: Array<{
    title: string
    deliverable?: string
    escrowStatus?: string
  }>
  metrics?: Array<{
    label: string
    value: string
  }>
  testimonial?: {
    quote?: string
    author?: string
    designation?: string
  }
  publishedAt?: string
}
