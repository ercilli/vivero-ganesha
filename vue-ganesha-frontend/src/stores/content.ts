import { defineStore } from 'pinia'
import { ref } from 'vue'
import { contentService } from '@/services/content'
import type { SiteContent, ContactInfo, ContactForm } from '@/types'

export const useContentStore = defineStore('content', () => {
  // State
  const siteContent = ref<SiteContent | null>(null)
  const contactInfo = ref<ContactInfo | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  const fetchSiteContent = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await contentService.getSiteContent()
      siteContent.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching site content:', err)
      // Fallback to default content if API fails
      setDefaultContent()
    } finally {
      loading.value = false
    }
  }

  const fetchContactInfo = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await contentService.getContactInfo()
      contactInfo.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching contact info:', err)
      // Fallback to default contact info
      setDefaultContactInfo()
    } finally {
      loading.value = false
    }
  }

  const submitContactForm = async (formData: ContactForm) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await contentService.submitContactForm(formData)
      return response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error submitting contact form:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Fallback content methods
  const setDefaultContent = () => {
    siteContent.value = {
      id: 'default',
      hero: {
        title: 'Naturaleza y Espiritualidad',
        subtitle: 'Cultivamos plantas con amor y dedicación, inspirados por la sabiduría de Ganesha',
        backgroundImage: '/img/fondo.png',
        ctaButtons: [
          { text: 'Ver Productos', href: '#productos', type: 'primary' },
          { text: 'Contactarnos', href: '#contacto', type: 'secondary' }
        ]
      },
      about: {
        title: 'Nuestra Historia',
        subtitle: 'Conoce la esencia de Vivero Ganesha y lo que nos hace únicos',
        mainImage: '/img/ganesha.png',
        sections: [
          {
            title: 'Quiénes Somos',
            content: 'Vivero Ganesha nació de la pasión por la naturaleza y la espiritualidad. Inspirados por la figura de Ganesha, el removedor de obstáculos en la cultura hindú, cultivamos plantas que no solo embellecen espacios, sino que también traen armonía y prosperidad a los hogares.'
          }
        ]
      },
      seo: {
        title: 'Vivero Ganesha - Naturaleza y Espiritualidad',
        description: 'Cultivamos plantas con amor y dedicación, inspirados por la sabiduría de Ganesha',
        keywords: ['vivero', 'plantas', 'ganesha', 'naturaleza', 'jardinería'],
        ogImage: '/img/ganesha.png'
      },
      theme: {
        primaryColor: '#16a34a',
        secondaryColor: '#f59e0b',
        accentColor: '#166534',
        logoUrl: '/img/icono_ganesha.png'
      }
    }
  }

  const setDefaultContactInfo = () => {
    contactInfo.value = {
      id: 'default',
      address: 'Thorne 3055, Buenos Aires, Ituzaingo',
      phone: '+54 9 1169011279',
      whatsappNumber: '5491169011279',
      email: 'contacto@viveroganesha.com',
      workingHours: {
        monday: { isOpen: true, morning: { start: '10:00', end: '13:00' }, afternoon: { start: '17:00', end: '19:00' } },
        tuesday: { isOpen: true, morning: { start: '10:00', end: '13:00' }, afternoon: { start: '17:00', end: '19:00' } },
        wednesday: { isOpen: true, morning: { start: '10:00', end: '13:00' }, afternoon: { start: '17:00', end: '19:00' } },
        thursday: { isOpen: true, morning: { start: '10:00', end: '13:00' }, afternoon: { start: '17:00', end: '19:00' } },
        friday: { isOpen: true, morning: { start: '10:00', end: '13:00' }, afternoon: { start: '17:00', end: '19:00' } },
        saturday: { isOpen: true, morning: { start: '09:00', end: '13:00' } },
        sunday: { isOpen: false }
      },
      socialMedia: {
        facebook: 'https://www.facebook.com/share/19Z1wBnXdN/',
        instagram: 'https://www.instagram.com/viveroganesha?igsh=ZXY0NmdzbzZmb3Rm'
      }
    }
  }

  const initializeStore = async () => {
    await Promise.all([
      fetchSiteContent(),
      fetchContactInfo()
    ])
  }

  return {
    // State
    siteContent,
    contactInfo,
    loading,
    error,
    
    // Actions
    fetchSiteContent,
    fetchContactInfo,
    submitContactForm,
    initializeStore
  }
})
