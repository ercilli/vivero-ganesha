<template>
  <section id="contacto" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-ganesha-green-800 mb-4">
          Contacto
        </h2>
        <div class="section-divider w-1/3 mx-auto my-4"></div>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Estamos aquí para ayudarte con cualquier consulta sobre plantas y jardinería
        </p>
      </div>

      <!-- Contact Content -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Information -->
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">Visítanos</h3>
          
          <div v-if="contactInfo" class="bg-ganesha-green-50 p-6 rounded-lg shadow-sm mb-6">
            <!-- Address -->
            <div class="flex items-start mb-4">
              <i class="fas fa-map-marker-alt text-ganesha-amber-500 mt-1 mr-3"></i>
              <div>
                <h4 class="font-bold text-ganesha-green-800">Dirección</h4>
                <p class="text-gray-600">{{ contactInfo.address }}</p>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="flex items-start mb-4">
              <i class="fas fa-clock text-ganesha-amber-500 mt-1 mr-3"></i>
              <div>
                <h4 class="font-bold text-ganesha-green-800">Horario de atención</h4>
                <div class="text-gray-600">
                  <WorkingHours :hours="contactInfo.workingHours" />
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start">
              <i class="fas fa-phone-alt text-ganesha-amber-500 mt-1 mr-3"></i>
              <div>
                <h4 class="font-bold text-ganesha-green-800">Teléfono</h4>
                <a 
                  :href="`tel:${contactInfo.phone}`"
                  class="text-gray-600 hover:text-ganesha-green-700 transition-colors"
                >
                  {{ contactInfo.phone }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">Síguenos</h3>
          <div v-if="socialMedia" class="flex space-x-4">
            <a 
              v-if="socialMedia.facebook"
              :href="socialMedia.facebook" 
              target="_blank"
              rel="noopener noreferrer"
              class="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a 
              v-if="socialMedia.instagram"
              :href="socialMedia.instagram" 
              target="_blank"
              rel="noopener noreferrer"
              class="bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:w-1/2">
          <h3 class="text-2xl font-bold text-ganesha-green-700 mb-4">Escríbenos</h3>
          <ContactForm />

          <!-- WhatsApp Direct Contact -->
          <div class="mt-6 text-center">
            <p class="text-gray-600 mb-4">O contáctanos directamente por WhatsApp</p>
            <a 
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-btn bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
            >
              <i class="fab fa-whatsapp mr-2 text-xl"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import ContactForm from '@/components/ui/ContactForm.vue'
import WorkingHours from '@/components/ui/WorkingHours.vue'

const contentStore = useContentStore()

// Computed properties
const contactInfo = computed(() => contentStore.contactInfo)
const socialMedia = computed(() => contactInfo.value?.socialMedia)

const whatsappUrl = computed(() => {
  const number = contactInfo.value?.whatsappNumber || '5491169011279'
  const message = encodeURIComponent('Hola Vivero Ganesha, me gustaría hacer una consulta')
  return `https://wa.me/${number}?text=${message}`
})
</script>
