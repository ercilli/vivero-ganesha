import { apiService } from './api'
import type { Testimonial, PaginatedResponse, PaginationParams } from '@/types'

export const testimonialService = {
  async getTestimonials(params?: PaginationParams & { featured?: boolean; approved?: boolean }) {
    return apiService.get<PaginatedResponse<Testimonial>>('/testimonials', params)
  },

  async getFeaturedTestimonials() {
    return apiService.get<Testimonial[]>('/testimonials/featured')
  }
}
