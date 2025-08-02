export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: ProductCategory
  price?: number
  inStock: boolean
  whatsappMessage: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  order: number
  active: boolean
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  avatar: string
  position?: string
  clientSince: string
  featured: boolean
  approved: boolean
  createdAt: string
}

export interface ContactInfo {
  id: string
  address: string
  phone: string
  whatsappNumber: string
  email: string
  workingHours: WorkingHours
  socialMedia: SocialMedia
}

export interface WorkingHours {
  monday: DaySchedule
  tuesday: DaySchedule
  wednesday: DaySchedule
  thursday: DaySchedule
  friday: DaySchedule
  saturday: DaySchedule
  sunday: DaySchedule
}

export interface DaySchedule {
  isOpen: boolean
  morning?: TimeSlot
  afternoon?: TimeSlot
}

export interface TimeSlot {
  start: string
  end: string
}

export interface SocialMedia {
  facebook?: string
  instagram?: string
  twitter?: string
  youtube?: string
}

export interface SiteContent {
  id: string
  hero: HeroContent
  about: AboutContent
  seo: SEOContent
  theme: ThemeConfig
}

export interface HeroContent {
  title: string
  subtitle: string
  backgroundImage: string
  ctaButtons: CTAButton[]
}

export interface AboutContent {
  title: string
  subtitle: string
  mainImage: string
  sections: AboutSection[]
}

export interface AboutSection {
  title: string
  content: string
  features?: string[]
}

export interface CTAButton {
  text: string
  href: string
  type: 'primary' | 'secondary'
}

export interface SEOContent {
  title: string
  description: string
  keywords: string[]
  ogImage: string
}

export interface ThemeConfig {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  logoUrl: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}
