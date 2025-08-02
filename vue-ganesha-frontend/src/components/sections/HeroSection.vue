<template>
  <section 
    id="inicio" 
    class="hero-section relative py-20 md:py-32 overflow-hidden"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-black opacity-40"></div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-center text-white">
      <div class="animate-fade-in">
        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-balance">
          {{ heroContent?.title || 'Naturaleza y Espiritualidad' }}
        </h2>
        
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance">
          {{ heroContent?.subtitle || 'Cultivamos plantas con amor y dedicación, inspirados por la sabiduría de Ganesha' }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <template v-if="heroContent?.ctaButtons">
            <component
              v-for="(button, index) in heroContent.ctaButtons"
              :key="index"
              :is="button.href.startsWith('#') ? 'a' : 'router-link'"
              :to="button.href.startsWith('#') ? undefined : button.href"
              :href="button.href.startsWith('#') ? button.href : undefined"
              :class="button.type === 'primary' ? 'btn-primary' : 'btn-secondary'"
              @click="button.href.startsWith('#') && scrollToSection(button.href)"
            >
              {{ button.text }}
            </component>
          </template>
          
          <!-- Default buttons if no CTA buttons from API -->
          <template v-else>
            <a 
              href="#productos" 
              class="btn-primary"
              @click="scrollToSection('#productos')"
            >
              Ver Productos
            </a>
            <a 
              href="#contacto" 
              class="btn-secondary"
              @click="scrollToSection('#contacto')"
            >
              Contactarnos
            </a>
          </template>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        class="relative block w-full h-16 fill-current text-white"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()

// Computed properties
const heroContent = computed(() => contentStore.siteContent?.hero)

const backgroundImage = computed(() => 
  heroContent.value?.backgroundImage || '/img/fondo.png'
)

// Methods
const scrollToSection = (selector: string) => {
  const element = document.querySelector(selector)
  if (element) {
    const offset = 80 // Account for fixed header
    const elementPosition = element.offsetTop - offset
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 100, 0, 0.6);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
  }
}
</style>
