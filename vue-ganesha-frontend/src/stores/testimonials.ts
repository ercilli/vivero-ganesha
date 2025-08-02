import { defineStore } from 'pinia'
import { ref } from 'vue'
import { testimonialService } from '@/services/testimonials'
import type { Testimonial } from '@/types'

export const useTestimonialStore = defineStore('testimonials', () => {
  // State
  const testimonials = ref<Testimonial[]>([])
  const featuredTestimonials = ref<Testimonial[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  const fetchTestimonials = async (params?: any) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await testimonialService.getTestimonials(params)
      testimonials.value = response.data.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching testimonials:', err)
      // Fallback to default testimonials
      setDefaultTestimonials()
    } finally {
      loading.value = false
    }
  }

  const fetchFeaturedTestimonials = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await testimonialService.getFeaturedTestimonials()
      featuredTestimonials.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching featured testimonials:', err)
      // Fallback to default testimonials
      setDefaultTestimonials()
    } finally {
      loading.value = false
    }
  }

  const setDefaultTestimonials = () => {
    const defaultTestimonials: Testimonial[] = [
      {
        id: '1',
        name: 'María González',
        rating: 5,
        comment: 'Las plantas cítricas que compré en Vivero Ganesha son de excelente calidad. En solo un año ya estaban dando frutos!',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        clientSince: '2019',
        featured: true,
        approved: true,
        createdAt: '2023-01-01'
      },
      {
        id: '2',
        name: 'Carlos Rodríguez',
        rating: 5,
        comment: 'El asesoramiento que recibí fue excepcional. Me ayudaron a elegir las plantas perfectas para mi jardín según la luz que recibe.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        clientSince: '2020',
        featured: true,
        approved: true,
        createdAt: '2023-02-01'
      },
      {
        id: '3',
        name: 'Laura Martínez',
        rating: 4.5,
        comment: 'Me encanta la filosofía del vivero. No solo venden plantas, transmiten amor por la naturaleza y enseñan a cuidarlas.',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        clientSince: '2021',
        featured: true,
        approved: true,
        createdAt: '2023-03-01'
      }
    ]
    
    featuredTestimonials.value = defaultTestimonials
    testimonials.value = defaultTestimonials
  }

  const initializeStore = async () => {
    await fetchFeaturedTestimonials()
  }

  return {
    // State
    testimonials,
    featuredTestimonials,
    loading,
    error,
    
    // Actions
    fetchTestimonials,
    fetchFeaturedTestimonials,
    initializeStore
  }
})
