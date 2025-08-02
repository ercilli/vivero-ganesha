<template>
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <!-- Rating Stars -->
    <div class="flex items-center mb-4">
      <div class="text-ganesha-amber-500 text-xl mr-2">
        <i 
          v-for="star in 5" 
          :key="star"
          :class="getStarClass(star)"
        ></i>
      </div>
      <span class="text-sm text-gray-500 ml-2">{{ formatRating(testimonial.rating) }}</span>
    </div>

    <!-- Comment -->
    <p class="text-gray-600 mb-4 line-clamp-4">
      "{{ testimonial.comment }}"
    </p>

    <!-- Client Info -->
    <div class="flex items-center">
      <img 
        :src="testimonial.avatar" 
        :alt="testimonial.name"
        class="w-10 h-10 rounded-full mr-3 object-cover"
        @error="onImageError"
      >
      <div>
        <h4 class="font-bold text-ganesha-green-700">{{ testimonial.name }}</h4>
        <p class="text-gray-500 text-sm">
          {{ testimonial.position || `Cliente desde ${testimonial.clientSince}` }}
        </p>
      </div>
    </div>

    <!-- Featured Badge -->
    <div 
      v-if="testimonial.featured"
      class="absolute top-2 right-2 px-2 py-1 bg-ganesha-amber-500 text-white rounded-full text-xs font-medium"
    >
      Destacado
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types'

interface Props {
  testimonial: Testimonial
}

const props = defineProps<Props>()

// Methods
const getStarClass = (starNumber: number): string => {
  const rating = props.testimonial.rating
  if (starNumber <= Math.floor(rating)) {
    return 'fas fa-star'
  } else if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
    return 'fas fa-star-half-alt'
  } else {
    return 'far fa-star'
  }
}

const formatRating = (rating: number): string => {
  return rating % 1 === 0 ? rating.toString() : rating.toFixed(1)
}

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://via.placeholder.com/40x40/16a34a/ffffff?text=C' // Fallback avatar
}
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
