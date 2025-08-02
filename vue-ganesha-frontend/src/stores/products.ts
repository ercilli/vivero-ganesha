import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { productService } from '@/services/products'
import type { Product, ProductCategory } from '@/types'

export const useProductStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>([])
  const categories = ref<ProductCategory[]>([])
  const featuredProducts = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const productsByCategory = computed(() => {
    return (categorySlug: string) => 
      products.value.filter(product => product.category.slug === categorySlug)
  })

  const getProductById = computed(() => {
    return (id: string) => products.value.find(product => product.id === id)
  })

  const activeCategories = computed(() => 
    categories.value.filter(category => category.active).sort((a, b) => a.order - b.order)
  )

  // Actions
  const fetchProducts = async (params?: any) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await productService.getProducts(params)
      products.value = response.data.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching products:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchCategories = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await productService.getCategories()
      categories.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching categories:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchFeaturedProducts = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await productService.getFeaturedProducts()
      featuredProducts.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('Error fetching featured products:', err)
    } finally {
      loading.value = false
    }
  }

  const setDefaultProducts = () => {
    // Default categories
    categories.value = [
      { id: '1', name: 'Plantas Cítricas', slug: 'citricas', description: 'Limones, naranjas, mandarinas y más', image: '/img/plantas_citricas.png', order: 1, active: true },
      { id: '2', name: 'Árboles Frutales', slug: 'frutales', description: 'Manzanos, perales, ciruelos y variedades exóticas', image: '/img/arboles_frutales.png', order: 2, active: true },
      { id: '3', name: 'Árboles', slug: 'arboles', description: 'Especies nativas y ornamentales', image: '/img/arboles.png', order: 3, active: true },
      { id: '4', name: 'Palmeras', slug: 'palmeras', description: 'Variedades tropicales y resistentes', image: '/img/palmeras.png', order: 4, active: true },
      { id: '5', name: 'Plantas Florales', slug: 'florales', description: 'Coloridas y aromáticas', image: '/img/plantas_florales.png', order: 5, active: true },
      { id: '6', name: 'Huerta', slug: 'huerta', description: 'Todo para tu huerto orgánico', image: '/img/huerta.png', order: 6, active: true },
      { id: '7', name: 'Aromáticas', slug: 'aromaticas', description: 'Hierbas para cocina, té y aromaterapia', image: '/img/plantas_aromaticas.png', order: 7, active: true },
      { id: '8', name: 'Productos de Cuidado', slug: 'cuidado', description: 'Fertilizantes y herramientas', image: '/img/productos_de_cuidado.png', order: 8, active: true },
      { id: '9', name: 'Macetas y Sustratos', slug: 'macetas', description: 'Macetas decorativas y sustratos especializados', image: '/img/macetas_sustratos.png', order: 9, active: true }
    ]

    // Default products
    const defaultProducts: Product[] = [
      {
        id: '1',
        name: 'Plantas Cítricas',
        description: 'Limones, naranjas, mandarinas y más. Cultivadas con técnicas especiales para garantizar su fruto.',
        image: '/img/plantas_citricas.png',
        category: categories.value[0],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus plantas cítricas',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '2',
        name: 'Árboles Frutales',
        description: 'Manzanos, perales, ciruelos y variedades exóticas. Perfectos para tu huerto o jardín.',
        image: '/img/arboles_frutales.png',
        category: categories.value[1],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus árboles frutales',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '3',
        name: 'Árboles',
        description: 'Especies nativas y ornamentales para sombra, decoración y reforestación.',
        image: '/img/arboles.png',
        category: categories.value[2],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus árboles',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '4',
        name: 'Palmeras',
        description: 'Variedades tropicales y resistentes para darle un toque exótico a tu espacio.',
        image: '/img/palmeras.png',
        category: categories.value[3],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus palmeras',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '5',
        name: 'Plantas Florales',
        description: 'Coloridas y aromáticas, perfectas para decorar interiores y exteriores.',
        image: '/img/plantas_florales.png',
        category: categories.value[4],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus plantas florales',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '6',
        name: 'Huerta',
        description: 'Todo para tu huerto orgánico: hortalizas, hierbas y todo lo necesario para cultivar.',
        image: '/img/huerta.png',
        category: categories.value[5],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus productos para huerta',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '7',
        name: 'Aromáticas',
        description: 'Hierbas para cocina, té y aromaterapia: albahaca, romero, menta y más.',
        image: '/img/plantas_aromaticas.png',
        category: categories.value[6],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus plantas aromáticas',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '8',
        name: 'Productos de Cuidado',
        description: 'Fertilizantes orgánicos, pesticidas naturales y herramientas de calidad.',
        image: '/img/productos_de_cuidado.png',
        category: categories.value[7],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus productos de cuidado',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '9',
        name: 'Macetas y Sustratos',
        description: 'Variedad de macetas decorativas y sustratos especializados para cada tipo de planta.',
        image: '/img/macetas_sustratos.png',
        category: categories.value[8],
        inStock: true,
        whatsappMessage: 'Hola Vivero Ganesha, me interesan sus macetas y sustratos',
        featured: true,
        createdAt: '2023-01-01',
        updatedAt: '2024-01-01'
      }
    ]

    products.value = defaultProducts
    featuredProducts.value = defaultProducts
  }

  const initializeStore = async () => {
    try {
      await Promise.all([
        fetchCategories(),
        fetchFeaturedProducts(),
        fetchProducts()
      ])
    } catch (err) {
      console.error('Failed to load from API, using default products:', err)
      setDefaultProducts()
    }
  }

  return {
    // State
    products,
    categories,
    featuredProducts,
    loading,
    error,
    
    // Getters
    productsByCategory,
    getProductById,
    activeCategories,
    
    // Actions
    fetchProducts,
    fetchCategories,
    fetchFeaturedProducts,
    initializeStore
  }
})
