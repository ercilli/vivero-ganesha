import { createRouter, createWebHistory } from 'vue-router'
import HomePageOptimized from '@/views/HomePageOptimized.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageOptimized,
      meta: {
        title: 'Vivero Ganesha - Naturaleza y Espiritualidad'
      }
    },
    {
      path: '/productos',
      name: 'products',
      component: () => import('@/views/ProductsPage.vue'),
      meta: {
        title: 'Productos - Vivero Ganesha'
      }
    },
    {
      path: '/productos/:category',
      name: 'product-category',
      component: () => import('@/views/ProductCategoryPage.vue'),
      meta: {
        title: 'Categoría - Vivero Ganesha'
      }
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue'),
      meta: {
        title: 'Contacto - Vivero Ganesha'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    
    if (savedPosition) {
      return savedPosition
    }
    
    return { top: 0 }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  next()
})

export default router
