<template>
  <section class="py-16 bg-amber-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-ganesha-green-800 mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <div class="section-divider w-1/3 mx-auto my-4"></div>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Experiencias reales de quienes han confiado en nosotros
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="testimonial in displayTestimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
          class="animate-slide-up"
        />
      </div>

      <!-- Loading State -->
      <div v-else class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-ganesha-green-700"></div>
      </div>

      <!-- Error State -->
      <div v-if="error && !loading" class="text-center py-12">
        <p class="text-red-600 mb-4">{{ error }}</p>
        <button 
          @click="retryLoad"
          class="btn-primary"
        >
          Reintentar
        </button>
      </div>

      <!-- No testimonials message -->
      <div v-if="displayTestimonials.length === 0 && !loading && !error" class="text-center py-12">
        <p class="text-gray-600">Aún no hay testimonios disponibles.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTestimonialStore } from '@/stores/testimonials'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const testimonialStore = useTestimonialStore()

// Computed properties
const loading = computed(() => testimonialStore.loading)
const error = computed(() => testimonialStore.error)
const displayTestimonials = computed(() => testimonialStore.featuredTestimonials.slice(0, 3))

// Methods
const retryLoad = async () => {
  await testimonialStore.initializeStore()
}

onMounted(() => {
  // If no testimonials loaded, try to load them
  if (testimonialStore.featuredTestimonials.length === 0) {
    retryLoad()
  }
})
</script>
