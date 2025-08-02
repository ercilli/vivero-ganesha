<template>
  <section id="nosotros" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-ganesha-green-800 mb-4">
          {{ aboutContent?.title || 'Nuestra Historia' }}
        </h2>
        <div class="section-divider w-1/3 mx-auto my-4"></div>
        <p class="text-gray-600 max-w-3xl mx-auto">
          {{ aboutContent?.subtitle || 'Conoce la esencia de Vivero Ganesha y lo que nos hace únicos' }}
        </p>
      </div>

      <!-- Content -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Image -->
        <div class="md:w-1/2 animate-slide-up">
          <img 
            :src="aboutContent?.mainImage || '/img/ganesha.png'" 
            alt="Vivero Ganesha"
            class="rounded-lg shadow-xl w-full h-auto object-cover"
          >
        </div>

        <!-- Text Content -->
        <div class="md:w-1/2 animate-slide-up">
          <template v-if="aboutContent?.sections">
            <div 
              v-for="(section, index) in aboutContent.sections" 
              :key="index"
              class="mb-8"
            >
              <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">
                {{ section.title }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ section.content }}
              </p>
              
              <!-- Features List -->
              <ul v-if="section.features" class="text-gray-600 space-y-2">
                <li 
                  v-for="(feature, featureIndex) in section.features" 
                  :key="featureIndex"
                  class="flex items-start"
                >
                  <i class="fas fa-leaf text-ganesha-amber-500 mt-1 mr-2"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </template>

          <!-- Default content if no API data -->
          <template v-else>
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">Quiénes Somos</h3>
              <p class="text-gray-600 mb-4">
                Vivero Ganesha nació de la pasión por la naturaleza y la espiritualidad. 
                Inspirados por la figura de Ganesha, el removedor de obstáculos en la cultura hindú, 
                cultivamos plantas que no solo embellecen espacios, sino que también traen armonía y 
                prosperidad a los hogares.
              </p>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">Nuestra Trayectoria</h3>
              <p class="text-gray-600 mb-4">
                Con más de 10 años en el rubro, hemos crecido desde un pequeño emprendimiento familiar 
                hasta convertirnos en un referente en la región. Nuestro conocimiento se ha transmitido 
                de generación en generación, combinando técnicas tradicionales con innovaciones modernas.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">¿Qué nos hace diferentes?</h3>
              <ul class="text-gray-600 space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-leaf text-ganesha-amber-500 mt-1 mr-2"></i>
                  <span>Cultivo orgánico y sostenible de todas nuestras plantas</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-hands-helping text-ganesha-amber-500 mt-1 mr-2"></i>
                  <span>Asesoramiento personalizado para cada cliente</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-seedling text-ganesha-amber-500 mt-1 mr-2"></i>
                  <span>Variedades únicas y difíciles de encontrar en otros viveros</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-heart text-ganesha-amber-500 mt-1 mr-2"></i>
                  <span>Enfoque espiritual en el cuidado de las plantas</span>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()

// Computed properties
const aboutContent = computed(() => contentStore.siteContent?.about)
</script>

<style scoped>
/* Animations will be handled by Tailwind classes */
</style>
