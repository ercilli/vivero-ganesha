<template>
  <div class="product-card group">
    <!-- Product Image -->
    <div class="relative overflow-hidden">
      <!-- Imagen optimizada con responsive y lazy loading -->
      <picture>
        <!-- WebP para navegadores modernos -->
        <source 
          :srcset="webpSrcSet"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          type="image/webp"
        >
        <!-- JPEG fallback -->
        <source 
          :srcset="jpgSrcSet"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          type="image/jpeg"
        >
        <!-- Imagen base -->
        <img
          :src="optimizedSrc"
          :alt="product.name"
          class="product-image"
          loading="lazy"
          decoding="async"
          @load="handleImageLoad"
          @error="handleImageError"
        />
      </picture>
      
      <!-- Skeleton loader mientras carga -->
      <div v-if="!imageLoaded" class="loading-overlay">
        <div class="skeleton-loader"></div>
      </div>
      
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
        class="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold"
      >
        ⭐ Destacado
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <!-- Price (solo si existe) -->
      <div v-if="product.price" class="price-container">
        <span class="current-price">
          {{ formatPrice(product.price) }}
        </span>
      </div>

      <!-- Action Button -->
      <a 
        :href="whatsappUrl" 
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-button"
        :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }"
      >
        <i class="fab fa-whatsapp mr-2"></i>
        {{ product.inStock ? 'Consultar' : 'No disponible' }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Product } from '@/types'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const imageLoaded = ref(false)

// Obtener nombre base del archivo sin extensión
const imageName = computed(() => {
  const name = props.product.image.split('/').pop() || ''
  return name.replace(/\.(png|jpg|jpeg|webp)$/i, '')
})

// Generar URLs optimizadas
const webpSrcSet = computed(() => {
  const base = `/img/${imageName.value}`
  return [
    `${base}-mobile.webp 640w`,
    `${base}-tablet.webp 1024w`, 
    `${base}-desktop.webp 1200w`,
    `${base}.webp 1536w`
  ].join(', ')
})

const jpgSrcSet = computed(() => {
  const base = `/img/${imageName.value}`
  return [
    `${base}-mobile.jpg 640w`,
    `${base}-tablet.jpg 1024w`,
    `${base}-desktop.jpg 1200w`,
    `${base}.jpg 1536w`
  ].join(', ')
})

const optimizedSrc = computed(() => {
  return `/img/${imageName.value}.webp`
})

const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = () => {
  imageLoaded.value = false
}

const whatsappUrl = computed(() => {
  const message = `Hola Vivero Ganesha, me interesa el producto: ${props.product.name}`
  return `https://wa.me/5491169011279?text=${encodeURIComponent(message)}`
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(price)
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid #f3f4f6;
  contain: layout style paint;
}

.product-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-4px);
}

.product-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  transition: transform 0.3s;
  will-change: transform;
}

.group:hover .product-image {
  transform: scale(1.05);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f3f4f6;
}

.skeleton-loader {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  animation: shimmer 1.5s ease-in-out infinite;
}

.product-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #059669;
  margin-bottom: 0.5rem;
}

.product-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.original-price {
  color: #9ca3af;
  text-decoration: line-through;
  font-size: 0.875rem;
}

.current-price {
  color: #059669;
  font-weight: bold;
  font-size: 1.125rem;
}

.discount {
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}

.whatsapp-button {
  width: 100%;
  background-color: #10b981;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s;
  transform: translateZ(0);
}

.whatsapp-button:hover {
  background-color: #059669;
  transform: scale(1.05);
}

.whatsapp-button:active {
  transform: scale(0.95);
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
