<template>
  <div class="doherty-optimized-image">
    <!-- Skeleton loader (aparece inmediatamente) -->
    <div 
      v-if="isLoading" 
      class="skeleton-loader"
      :style="{ 
        width: width + 'px', 
        height: height + 'px' 
      }"
    >
      <div class="skeleton-shimmer"></div>
    </div>

    <!-- Imagen con lazy loading y feedback inmediato -->
    <div 
      v-show="!isLoading"
      class="image-container"
      :class="{ 'image-loaded': imageLoaded }"
    >
      <img
        ref="imageElement"
        :src="optimizedSrc"
        :alt="alt"
        :loading="lazyLoad ? 'lazy' : 'eager'"
        class="optimized-image"
        @load="handleImageLoad"
        @error="handleImageError"
      />
      
      <!-- Overlay de estado (feedback inmediato) -->
      <div v-if="showFeedback" class="feedback-overlay">
        <div class="feedback-content">
          <i :class="feedbackIcon" class="feedback-icon"></i>
          <span class="feedback-text">{{ feedbackText }}</span>
        </div>
      </div>
    </div>

    <!-- Fallback para errores -->
    <div v-if="hasError" class="error-placeholder">
      <i class="fas fa-image text-gray-400 text-4xl mb-2"></i>
      <p class="text-gray-500 text-sm">Imagen no disponible</p>
      <button 
        @click="retryLoad" 
        class="retry-button"
      >
        <i class="fas fa-redo mr-1"></i>
        Reintentar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  lazyLoad?: boolean
  quality?: 'low' | 'medium' | 'high'
  showLoadingFeedback?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 200,
  lazyLoad: true,
  quality: 'medium',
  showLoadingFeedback: true
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

const imageElement = ref<HTMLImageElement>()
const isLoading = ref(true)
const imageLoaded = ref(false)
const hasError = ref(false)
const showFeedback = ref(false)
const loadStartTime = ref(0)

// Optimización de imágenes según calidad
const optimizedSrc = computed(() => {
  const qualityMap = {
    low: 60,
    medium: 80,
    high: 95
  }
  
  // Si es una imagen local, usarla directamente
  if (props.src.startsWith('/') || props.src.startsWith('./')) {
    return props.src
  }
  
  // Para imágenes externas, se podría integrar con servicio de optimización
  // Por ahora, usar la imagen original
  return props.src
})

const feedbackIcon = computed(() => {
  if (isLoading.value) return 'fas fa-spinner fa-spin'
  if (hasError.value) return 'fas fa-exclamation-triangle'
  return 'fas fa-check'
})

const feedbackText = computed(() => {
  if (isLoading.value) return 'Cargando...'
  if (hasError.value) return 'Error al cargar'
  return 'Cargado'
})

const handleImageLoad = async (event: Event) => {
  // Calcular tiempo de carga
  const loadTime = performance.now() - loadStartTime.value
  
  // Si la carga fue muy rápida (< 100ms), añadir un delay mínimo
  // para evitar flashing del skeleton
  if (loadTime < 100) {
    await new Promise(resolve => setTimeout(resolve, 100 - loadTime))
  }
  
  // Aplicar principio de Doherty: feedback inmediato
  showFeedback.value = props.showLoadingFeedback
  
  // Transición suave
  await nextTick()
  isLoading.value = false
  imageLoaded.value = true
  hasError.value = false
  
  // Ocultar feedback después de 200ms (dentro del threshold de 400ms)
  if (showFeedback.value) {
    setTimeout(() => {
      showFeedback.value = false
    }, 200)
  }
  
  emit('load', event)
}

const handleImageError = (event: Event) => {
  isLoading.value = false
  hasError.value = true
  showFeedback.value = false
  emit('error', event)
}

const retryLoad = () => {
  hasError.value = false
  isLoading.value = true
  loadStartTime.value = performance.now()
  
  // Forzar recarga de la imagen
  if (imageElement.value) {
    imageElement.value.src = ''
    imageElement.value.src = optimizedSrc.value
  }
}

onMounted(() => {
  loadStartTime.value = performance.now()
  
  // Preconectar a dominios de imágenes para mejorar rendimiento
  if (!props.src.startsWith('/')) {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = new URL(props.src).origin
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
.doherty-optimized-image {
  @apply relative inline-block;
}

/* Skeleton loader con animación fluida */
.skeleton-loader {
  @apply bg-gray-200 rounded-lg overflow-hidden relative;
}

.skeleton-shimmer {
  @apply absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60;
  animation: shimmer 1.5s infinite;
  transform: translateX(-100%);
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Container de imagen con transiciones suaves */
.image-container {
  @apply relative rounded-lg overflow-hidden;
  transition: all 0.3s ease;
}

.optimized-image {
  @apply w-full h-full object-cover transition-all duration-300;
  transform: scale(1.02);
  opacity: 0;
}

.image-loaded .optimized-image {
  transform: scale(1);
  opacity: 1;
}

/* Feedback overlay (aparece/desaparece rápidamente) */
.feedback-overlay {
  @apply absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center;
  transition: all 0.2s ease;
}

.feedback-content {
  @apply bg-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-lg;
}

.feedback-icon {
  @apply text-green-500;
}

.feedback-text {
  @apply text-sm font-medium text-gray-700;
}

/* Error state */
.error-placeholder {
  @apply flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg;
  min-height: 200px;
}

.retry-button {
  @apply mt-3 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors duration-200;
}

/* Hover effects (respuesta inmediata) */
.image-container:hover .optimized-image {
  transform: scale(1.05);
}

.image-container:hover {
  @apply shadow-lg;
}

/* Focus states para accesibilidad */
.retry-button:focus {
  @apply outline-none ring-2 ring-green-500 ring-offset-2;
}
</style>
