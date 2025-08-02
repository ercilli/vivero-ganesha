<template>
  <section id="productos" class="py-16 bg-ganesha-green-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-ganesha-green-800 mb-4">
          Nuestros Productos
        </h2>
        <div class="section-divider w-1/3 mx-auto my-4"></div>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Descubre nuestra amplia variedad de plantas y productos para el jardín
        </p>
      </div>

      <!-- Products Grid -->
      <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="product in displayProducts"
          :key="product.id"
          :product="product"
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

      <!-- View More Button -->
      <div v-if="displayProducts.length > 0 && !showAll" class="text-center mt-12">
        <button 
          @click="showAll = true"
          class="btn-primary"
        >
          Ver Todos los Productos
        </button>
      </div>

      <!-- View All Products Link -->
      <div v-if="displayProducts.length > 0" class="text-center mt-8">
        <router-link 
          to="/productos"
          class="text-ganesha-green-700 hover:text-ganesha-amber-500 font-medium transition-colors"
        >
          Ver catálogo completo →
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import ProductCard from '@/components/ui/ProductCard.vue'

const productStore = useProductStore()
const showAll = ref(false)

// Computed properties
const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)

const displayProducts = computed(() => {
  const products = productStore.featuredProducts.length > 0 
    ? productStore.featuredProducts 
    : productStore.products

  return showAll.value ? products : products.slice(0, 9)
})

// Methods
const retryLoad = async () => {
  await productStore.initializeStore()
}

onMounted(() => {
  // If no products loaded, try to load them
  if (productStore.products.length === 0 && productStore.featuredProducts.length === 0) {
    retryLoad()
  }
})
</script>
