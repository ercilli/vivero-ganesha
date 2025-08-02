<template>
  <header class="bg-ganesha-green-800 text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo and Brand -->
      <div class="flex items-center space-x-2">
        <img 
          :src="logoUrl" 
          alt="Ganesha Icon" 
          class="ganesha-icon w-10 h-10 filter drop-shadow-lg"
        >
        <h1 class="text-2xl font-bold">Vivero Ganesha</h1>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <router-link 
          to="/" 
          class="nav-link"
          :class="{ 'text-ganesha-amber-500': $route.path === '/' }"
        >
          Inicio
        </router-link>
        <a href="#nosotros" class="nav-link">Nosotros</a>
        <router-link 
          to="/productos" 
          class="nav-link"
          :class="{ 'text-ganesha-amber-500': $route.path.startsWith('/productos') }"
        >
          Productos
        </router-link>
        <router-link 
          to="/contacto" 
          class="nav-link"
          :class="{ 'text-ganesha-amber-500': $route.path === '/contacto' }"
        >
          Contacto
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-2xl focus:outline-none"
        @click="toggleMobileMenu"
        aria-label="Toggle mobile menu"
      >
        <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden bg-ganesha-green-800 w-full py-4 border-t border-ganesha-green-700"
      >
        <div class="container mx-auto px-4 flex flex-col space-y-4">
          <router-link 
            to="/" 
            class="nav-link py-2"
            @click="closeMobileMenu"
          >
            Inicio
          </router-link>
          <a href="#nosotros" class="nav-link py-2" @click="closeMobileMenu">Nosotros</a>
          <router-link 
            to="/productos" 
            class="nav-link py-2"
            @click="closeMobileMenu"
          >
            Productos
          </router-link>
          <router-link 
            to="/contacto" 
            class="nav-link py-2"
            @click="closeMobileMenu"
          >
            Contacto
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()
const mobileMenuOpen = ref(false)

// Computed properties
const logoUrl = computed(() => 
  contentStore.siteContent?.theme.logoUrl || '/img/icono_ganesha.png'
)

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu on escape key
const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('header')) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.ganesha-icon {
  filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.5));
}
</style>
