<template>
  <div class="product-card group">
    <!-- Product Image -->
    <div class="relative overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        @error="onImageError"
      >
      
      <!-- Stock Status Badge -->
      <div 
        class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium"
        :class="product.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'"
      >
        {{ product.inStock ? 'Disponible' : 'Agotado' }}
      </div>

      <!-- Featured Badge -->
      <div 
        v-if="product.featured"
        class="absolute top-2 left-2 px-2 py-1 bg-ganesha-amber-500 text-white rounded-full text-xs font-medium"
      >
        Destacado
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-ganesha-green-700 mb-2">
        {{ product.name }}
      </h3>
      
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ product.description }}
      </p>

      <!-- Price (if available) -->
      <div v-if="product.price" class="mb-4">
        <span class="text-2xl font-bold text-ganesha-green-800">
          ${{ formatPrice(product.price) }}
        </span>
      </div>

      <!-- Category Tag -->
      <div class="mb-4">
        <span class="inline-block px-3 py-1 bg-ganesha-green-100 text-ganesha-green-700 rounded-full text-sm">
          {{ product.category.name }}
        </span>
      </div>

      <!-- WhatsApp Contact Button -->
      <a 
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-btn w-full justify-center"
        :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }"
        :aria-disabled="!product.inStock"
      >
        <i class="fab fa-whatsapp mr-2"></i> 
        {{ product.inStock ? 'Consultar' : 'No disponible' }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import type { Product } from '@/types'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const contentStore = useContentStore()

// Computed properties
const whatsappUrl = computed(() => {
  if (!props.product.inStock) return '#'
  
  const number = contentStore.contactInfo?.whatsappNumber || '5491169011279'
  const message = encodeURIComponent(
    props.product.whatsappMessage || 
    `Hola Vivero Ganesha, me interesan sus ${props.product.name.toLowerCase()}`
  )
  return `https://wa.me/${number}?text=${message}`
})

// Methods
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price)
}

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/img/placeholder.png' // Fallback image
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
