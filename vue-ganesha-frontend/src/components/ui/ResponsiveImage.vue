<template>
  <div class="responsive-image-container" :style="containerStyle">
    <!-- Placeholder de carga inmediata -->
    <div 
      v-if="!loaded && !error" 
      class="image-placeholder"
      :class="placeholderClass"
    >
      <div class="skeleton-shimmer"></div>
    </div>
    
    <!-- Imagen optimizada con responsive breakpoints -->
    <picture v-show="loaded && !error">
      <!-- WebP para navegadores modernos -->
      <source 
        :srcset="webpSrcSet"
        :sizes="sizes"
        type="image/webp"
      >
      <!-- JPEG fallback -->
      <source 
        :srcset="jpgSrcSet"
        :sizes="sizes"
        type="image/jpeg"
      >
      <!-- Imagen base -->
      <img
        ref="imageRef"
        :src="baseSrc"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="eager ? 'eager' : 'lazy'"
        :decoding="eager ? 'sync' : 'async'"
        :class="imageClass"
        @load="handleLoad"
        @error="handleError"
      />
    </picture>
    
    <!-- Error fallback -->
    <div v-if="error" class="error-fallback">
      <svg class="error-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
      </svg>
      <span class="error-text">Error al cargar imagen</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: string
  sizes?: string
  class?: string
  eager?: boolean
  quality?: 'thumb' | 'mobile' | 'tablet' | 'desktop'
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 300,
  aspectRatio: '4/3',
  sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  class: '',
  eager: false,
  quality: 'desktop'
})

const imageRef = ref<HTMLImageElement>()
const loaded = ref(false)
const error = ref(false)

// Obtener nombre base del archivo sin extensión
const baseName = computed(() => {
  const name = props.src.split('/').pop() || ''
  return name.replace(/\.(png|jpg|jpeg|webp)$/i, '')
})

// Generar URLs optimizadas
const webpSrcSet = computed(() => {
  const base = `/img/${baseName.value}`
  return [
    `${base}-mobile.webp 640w`,
    `${base}-tablet.webp 1024w`, 
    `${base}-desktop.webp 1200w`,
    `${base}.webp 1536w`
  ].join(', ')
})

const jpgSrcSet = computed(() => {
  const base = `/img/${baseName.value}`
  return [
    `${base}-mobile.jpg 640w`,
    `${base}-tablet.jpg 1024w`,
    `${base}-desktop.jpg 1200w`,
    `${base}.jpg 1536w`
  ].join(', ')
})

const baseSrc = computed(() => {
  const base = `/img/${baseName.value}`
  const suffix = props.quality === 'thumb' ? '-thumb' : 
                 props.quality === 'mobile' ? '-mobile' :
                 props.quality === 'tablet' ? '-tablet' : ''
  return `${base}${suffix}.webp`
})

// Estilos del contenedor
const containerStyle = computed(() => ({
  aspectRatio: props.aspectRatio,
  position: 'relative' as const,
  overflow: 'hidden' as const,
  backgroundColor: '#f3f4f6'
}))

const imageClass = computed(() => [
  'responsive-image',
  props.class
])

const placeholderClass = computed(() => [
  'w-full h-full',
  props.class
])

// Event handlers
const handleLoad = () => {
  loaded.value = true
  error.value = false
}

const handleError = () => {
  loaded.value = false
  error.value = true
}

// Preload critical images
onMounted(() => {
  if (props.eager && imageRef.value) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = baseSrc.value
    document.head.appendChild(link)
  }
})
</script>

<style scoped>
.responsive-image-container {
  @apply relative overflow-hidden bg-gray-100;
}

.image-placeholder {
  @apply absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200;
  animation: shimmer 1.5s ease-in-out infinite;
}

.skeleton-shimmer {
  @apply absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30;
  animation: shimmer 1.5s ease-in-out infinite;
}

.responsive-image {
  @apply w-full h-full object-cover transition-opacity duration-300;
  opacity: 1;
}

.error-fallback {
  @apply absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400;
}

.error-icon {
  @apply w-12 h-12 mb-2;
}

.error-text {
  @apply text-sm font-medium;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Performance optimizations */
.responsive-image-container {
  contain: layout style paint;
}

.responsive-image {
  will-change: transform;
}
</style>
