import { apiService } from './api'
import type { SiteContent, ContactInfo, ContactForm } from '@/types'

export const contentService = {
  async getSiteContent() {
    return apiService.get<SiteContent>('/content/site')
  },

  async getContactInfo() {
    return apiService.get<ContactInfo>('/content/contact')
  },

  async submitContactForm(formData: ContactForm) {
    return apiService.post<{ success: boolean }>('/contact/submit', formData)
  }
}
