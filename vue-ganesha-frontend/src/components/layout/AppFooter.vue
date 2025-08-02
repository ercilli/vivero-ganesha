<template>
  <footer class="bg-ganesha-green-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and Brand -->
        <div class="flex items-center mb-4 md:mb-0">
          <img 
            :src="logoUrl" 
            alt="Ganesha Icon" 
            class="ganesha-icon w-8 h-8 mr-2"
          >
          <h3 class="text-xl font-bold">Vivero Ganesha</h3>
        </div>

        <!-- Copyright and Slogan -->
        <div class="text-center md:text-right">
          <p class="text-green-200">© {{ currentYear }} Vivero Ganesha. Todos los derechos reservados.</p>
          <p class="text-green-200">Cultivando con amor y espiritualidad.</p>
        </div>
      </div>

      <!-- Additional Links (Optional) -->
      <div class="mt-6 pt-6 border-t border-ganesha-green-700">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
          <div class="flex space-x-4 mb-4 md:mb-0">
            <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
            <router-link to="/productos" class="hover:text-white transition-colors">Productos</router-link>
            <router-link to="/contacto" class="hover:text-white transition-colors">Contacto</router-link>
          </div>
          
          <!-- Social Media Links -->
          <div v-if="socialMedia" class="flex space-x-4">
            <a 
              v-if="socialMedia.facebook"
              :href="socialMedia.facebook" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-ganesha-amber-500 transition-colors"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a 
              v-if="socialMedia.instagram"
              :href="socialMedia.instagram" 
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-ganesha-amber-500 transition-colors"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()

// Computed properties
const currentYear = new Date().getFullYear()

const logoUrl = computed(() => 
  contentStore.siteContent?.theme.logoUrl || '/img/icono_ganesha.png'
)

const socialMedia = computed(() => 
  contentStore.contactInfo?.socialMedia
)
</script>

<style scoped>
.ganesha-icon {
  filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.5));
}
</style>
