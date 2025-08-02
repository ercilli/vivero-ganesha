<template>
  <div class="product-category-page">
    <!-- Page Header -->
    <section class="py-16 bg-ganesha-green-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ categoryData?.name || 'Categoría' }}</h1>
        <p class="text-xl max-w-3xl mx-auto">
          {{ categoryData?.description || 'Productos de esta categoría' }}
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 bg-ganesha-green-50">
      <div class="container mx-auto px-4">
        <!-- Back Button -->
        <div class="mb-8">
          <router-link 
            to="/productos"
            class="inline-flex items-center text-ganesha-green-700 hover:text-ganesha-amber-500 transition-colors"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            Volver a Productos
          </router-link>
        </div>

        <!-- Products Grid -->
        <div v-if="!loading && categoryProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in categoryProducts"
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
          <h3 class="text-xl font-bold text-gray-600 mb-2">No hay productos en esta categoría</h3>
          <p class="text-gray-500">Explora otras categorías o vuelve pronto.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { useHead } from '@/composables/useHead'
import ProductCard from '@/components/ui/ProductCard.vue'

const route = useRoute()
const productStore = useProductStore()

// Computed properties
const loading = computed(() => productStore.loading)
const categorySlug = computed(() => route.params.category as string)

const categoryData = computed(() => 
  productStore.categories.find(cat => cat.slug === categorySlug.value)
)

const categoryProducts = computed(() => 
  productStore.productsByCategory(categorySlug.value)
)

onMounted(() => {
  // Set page metadata
  const category = categoryData.value
  useHead({
    title: `${category?.name || 'Categoría'} - Vivero Ganesha`,
    meta: [
      { name: 'description', content: category?.description || 'Productos de esta categoría en Vivero Ganesha' }
    ]
  })

  // Load products if not already loaded
  if (productStore.products.length === 0) {
    productStore.initializeStore()
  }
})
</script>
