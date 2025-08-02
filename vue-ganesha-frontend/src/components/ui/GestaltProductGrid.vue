<template>
  <div class="product-grid-gestalt">
    <!-- Aplicando Ley de Proximidad -->
    <div class="category-group" v-for="category in groupedProducts" :key="category.name">
      <!-- Ley de Similitud: elementos similares se perciben como grupo -->
      <h3 class="category-title">{{ category.name }}</h3>
      
      <!-- Ley de Cierre: contenedor visual que agrupa -->
      <div class="products-container">
        <div 
          v-for="product in category.products" 
          :key="product.id"
          class="product-card-gestalt"
        >
          <!-- Ley de Figura/Fondo: contraste claro -->
          <div class="product-image-container">
            <img :src="product.image" :alt="product.name" class="product-image">
            <!-- Ley de Continuidad: elementos alineados -->
            <div class="product-overlay">
              <span class="price-badge">{{ product.price }}</span>
            </div>
          </div>
          
          <!-- Agrupación por proximidad -->
          <div class="product-info-group">
            <h4 class="product-title">{{ product.name }}</h4>
            <p class="product-description">{{ product.description }}</p>
            
            <!-- Ley de Simetría: balance visual -->
            <div class="product-actions">
              <OptimizedButton 
                variant="whatsapp" 
                size="md"
                icon="fab fa-whatsapp"
                text="Consultar"
                :href="whatsappLink(product.name)"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OptimizedButton from './OptimizedButton.vue'

interface Product {
  id: string
  name: string
  description: string
  image: string
  price: string
  category: string
}

interface Props {
  products: Product[]
}

const props = defineProps<Props>()

// Agrupación por categorías (Ley de Similitud)
const groupedProducts = computed(() => {
  const groups = props.products.reduce((acc, product) => {
    const category = product.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {} as Record<string, Product[]>)
  
  return Object.entries(groups).map(([name, products]) => ({
    name,
    products
  }))
})

const whatsappLink = (productName: string) => {
  const message = encodeURIComponent(`Hola Vivero Ganesha, consulto por ${productName}`)
  return `https://wa.me/5491169011279?text=${message}`
}
</script>

<style scoped>
/* Aplicando Principios de Gestalt */
.product-grid-gestalt {
  @apply space-y-12; /* Separación entre grupos de categorías */
}

.category-group {
  /* Ley de Proximidad: elementos relacionados están cerca */
  @apply space-y-6;
}

.category-title {
  /* Ley de Similitud: títulos consistentes */
  @apply text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2;
}

.products-container {
  /* Ley de Cierre: contenedor que agrupa elementos */
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-green-50 rounded-xl;
}

.product-card-gestalt {
  /* Ley de Figura/Fondo: contraste claro con el fondo */
  @apply bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden;
  /* Ley de Continuidad: alineación consistente */
  @apply flex flex-col h-full;
}

.product-image-container {
  /* Ley de Cierre: contenedor visual para imagen */
  @apply relative overflow-hidden;
}

.product-image {
  /* Ley de Simetría: proporciones balanceadas */
  @apply w-full h-48 object-cover transition-transform duration-300 hover:scale-105;
}

.product-overlay {
  /* Ley de Figura/Fondo: contraste para legibilidad */
  @apply absolute top-2 right-2;
}

.price-badge {
  @apply bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold shadow-lg;
}

.product-info-group {
  /* Ley de Proximidad: información relacionada agrupada */
  @apply p-4 flex-1 flex flex-col space-y-3;
}

.product-title {
  /* Ley de Similitud: títulos consistentes */
  @apply text-lg font-bold text-green-800;
}

.product-description {
  /* Ley de Continuidad: flujo de lectura */
  @apply text-gray-600 text-sm flex-1;
}

.product-actions {
  /* Ley de Simetría: acciones centradas */
  @apply flex justify-center mt-auto;
}
</style>
