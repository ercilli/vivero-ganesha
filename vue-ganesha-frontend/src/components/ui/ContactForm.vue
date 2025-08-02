<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-gray-700 mb-2 font-medium">
        Nombre *
      </label>
      <input 
        id="name"
        v-model="form.name"
        type="text" 
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ganesha-amber-500 focus:border-transparent transition-colors"
        :class="{ 'border-red-500': errors.name }"
        placeholder="Tu nombre completo"
      >
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-gray-700 mb-2 font-medium">
        Email *
      </label>
      <input 
        id="email"
        v-model="form.email"
        type="email" 
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ganesha-amber-500 focus:border-transparent transition-colors"
        :class="{ 'border-red-500': errors.email }"
        placeholder="tu@email.com"
      >
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Phone Field -->
    <div>
      <label for="phone" class="block text-gray-700 mb-2 font-medium">
        Teléfono
      </label>
      <input 
        id="phone"
        v-model="form.phone"
        type="tel" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ganesha-amber-500 focus:border-transparent transition-colors"
        :class="{ 'border-red-500': errors.phone }"
        placeholder="+54 9 11 1234 5678"
      >
      <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
    </div>

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-gray-700 mb-2 font-medium">
        Mensaje *
      </label>
      <textarea 
        id="message"
        v-model="form.message"
        rows="4" 
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ganesha-amber-500 focus:border-transparent transition-colors resize-vertical"
        :class="{ 'border-red-500': errors.message }"
        placeholder="Cuéntanos en qué podemos ayudarte..."
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
    </div>

    <!-- Submit Button -->
    <button 
      type="submit"
      :disabled="loading || !isFormValid"
      class="bg-ganesha-amber-500 hover:bg-ganesha-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full flex items-center justify-center"
    >
      <span v-if="loading" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
      {{ loading ? 'Enviando...' : 'Enviar Mensaje' }}
    </button>

    <!-- Success/Error Messages -->
    <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
      {{ successMessage }}
    </div>
    
    <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useContentStore } from '@/stores/content'
import type { ContactForm as ContactFormType } from '@/types'

const contentStore = useContentStore()

// Form state
const form = reactive<ContactFormType>({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Computed properties
const isFormValid = computed(() => {
  return form.name.trim() && 
         form.email.trim() && 
         form.message.trim() && 
         isValidEmail(form.email)
})

// Methods
const validateForm = (): boolean => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  // Name validation
  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }

  // Email validation
  if (!form.email.trim()) {
    errors.email = 'El email es requerido'
    isValid = false
  } else if (!isValidEmail(form.email)) {
    errors.email = 'El email no es válido'
    isValid = false
  }

  // Phone validation (optional but if provided, should be valid)
  if (form.phone.trim() && !isValidPhone(form.phone)) {
    errors.phone = 'El teléfono no es válido'
    isValid = false
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = 'El mensaje es requerido'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  }

  return isValid
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/
  return phoneRegex.test(phone)
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await contentStore.submitContactForm(form)
    
    successMessage.value = '¡Mensaje enviado correctamente! Te contactaremos pronto.'
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof ContactFormType] = ''
    })
  } catch (error: any) {
    errorMessage.value = error.message || 'Error al enviar el mensaje. Por favor intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>
