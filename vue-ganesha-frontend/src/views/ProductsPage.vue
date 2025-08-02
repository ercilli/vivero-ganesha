<template>
  <div class="products-page">
    <!-- Page Header -->
    <section class="py-16 bg-ganesha-green-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Descubre toda nuestra variedad de plantas y productos para el jardín
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 bg-ganesha-green-50">
      <div class="container mx-auto px-4">
        <!-- Categories Filter -->
        <div v-if="categories.length > 0" class="mb-8">
          <h2 class="text-2xl font-bold text-ganesha-green-800 mb-4">Categorías</h2>
          <div class="flex flex-wrap gap-2">
            <button
              @click="selectedCategory = null"
              :class="selectedCategory === null ? 'bg-ganesha-amber-500 text-white' : 'bg-white text-ganesha-green-700 hover:bg-ganesha-green-100'"
              class="px-4 py-2 rounded-full border border-ganesha-green-300 transition-colors"
            >
              Todas
            </button>
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.slug"
              :class="selectedCategory === category.slug ? 'bg-ganesha-amber-500 text-white' : 'bg-white text-ganesha-green-700 hover:bg-ganesha-green-100'"
              class="px-4 py-2 rounded-full border border-ganesha-green-300 transition-colors"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="!loading && filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Loading State -->
        <div v-else-if="loading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-ganesha-green-700"></div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <i class="fas fa-leaf text-6xl text-gray-300 mb-4"></i>
          <h3 class="text-xl font-bold text-gray-600 mb-2">No hay productos disponibles</h3>
          <p class="text-gray-500">Vuelve pronto para ver nuestros productos.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import { useHead } from '@/composables/useHead'
import ProductCard from '@/components/ui/ProductCard.vue'

const productStore = useProductStore()
const selectedCategory = ref<string | null>(null)

// Computed properties
const loading = computed(() => productStore.loading)
const products = computed(() => productStore.products)
const categories = computed(() => productStore.activeCategories)

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value
  }
  return products.value.filter(product => product.category.slug === selectedCategory.value)
})

onMounted(() => {
  useHead({
    title: 'Productos - Vivero Ganesha',
    meta: [
      { name: 'description', content: 'Descubre toda nuestra variedad de plantas y productos para el jardín en Vivero Ganesha' }
    ]
  })

  // Load products if not already loaded
  if (products.value.length === 0) {
    productStore.initializeStore()
  }
})
</script>
