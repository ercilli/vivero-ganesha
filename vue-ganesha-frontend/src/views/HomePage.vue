<template>
  <div class="home-page">
    <!-- Hero Section - Mobile First Responsive -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
      <!-- Background Pattern for visual depth -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Mobile: text-3xl, Tablet: text-4xl, Desktop: text-5xl, Large: text-6xl -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Naturaleza y Espiritualidad
        </h1>
        <!-- Mobile: text-base, Tablet: text-lg, Desktop: text-xl -->
        <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Cultivamos plantas con amor y dedicación, inspirados por la sabiduría de Ganesha
        </p>
        
        <!-- Responsive Button Container - Stack on mobile, side-by-side on larger screens -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <OptimizedButton
            variant="primary"
            size="lg"
            text="Ver Productos"
            href="#productos"
            class="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-green-800 shadow-lg hover:shadow-xl transform hover:scale-105"
          />
          <OptimizedButton
            variant="secondary"
            size="lg"  
            text="Contactarnos"
            href="#contacto"
            class="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-green-800"
          />
        </div>
      </div>
    </section>

    <!-- About Section - Responsive with Gestalt Principles -->
    <section id="nosotros" class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header with Mobile-First Typography -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">
            Nuestra Historia
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            Conoce la esencia de Vivero Ganesha y lo que nos hace únicos
          </p>
        </div>

        <!-- Responsive Grid - Stack on mobile, side-by-side on larger screens -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <!-- Image Container with Doherty Optimization -->
          <div class="order-2 lg:order-1">
            <DohertyOptimizedImage
              src="/img/ganesha.png"
              alt="Vivero Ganesha - Naturaleza y Espiritualidad"
              :width="600"
              :height="400"
              class="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
            />
          </div>
          
          <!-- Content with Cognitive Load Optimization -->
          <div class="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-3 sm:mb-4">
              Quiénes Somos
            </h3>
            
            <!-- Chunked Content for Better Cognitive Processing -->
            <div class="space-y-3 sm:space-y-4">
              <p class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Vivero Ganesha nació de la pasión por la naturaleza y la espiritualidad.
              </p>
              <p class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Inspirados por la figura de Ganesha, el removedor de obstáculos en la cultura hindú, 
                cultivamos plantas que no solo embellecen espacios, sino que también traen armonía y 
                prosperidad a los hogares.
              </p>
            </div>
            
            <!-- Call to Action with Fitts' Law Optimization -->
            <div class="pt-4 sm:pt-6">
              <OptimizedButton
                variant="primary"
                size="lg"
                text="Conocer Más"
                href="#contacto"
                class="w-full sm:w-auto bg-green-600 hover:bg-green-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview - Gestalt Optimized Grid -->
    <section id="productos" class="py-12 sm:py-16 md:py-20 bg-green-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">
            Nuestros Productos
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            Descubre nuestra amplia variedad de plantas y productos para el jardín
          </p>
        </div>

        <!-- Responsive Product Grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          <!-- Product Card 1: Plantas Cítricas -->
          <div class="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="relative overflow-hidden">
              <DohertyOptimizedImage
                src="/img/plantas_citricas.png"
                alt="Plantas Cítricas - Limones, naranjas, mandarinas"
                :width="400"
                :height="250"
                class="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <!-- Price Badge -->
              <div class="absolute top-3 right-3">
                <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  Consultar
                </span>
              </div>
            </div>
            
            <!-- Card Content with Cognitive Load Optimization -->
            <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
                Plantas Cítricas
              </h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                Limones, naranjas, mandarinas y más variedades frescas.
              </p>
              
              <!-- Zeigarnik Effect Button -->
              <ZeigarnikConsultation
                product-name="Plantas Cítricas"
                product-image="/img/plantas_citricas.png"
              />
            </div>
          </div>

          <!-- Product Card 2: Árboles Frutales -->
          <div class="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div class="relative overflow-hidden">
              <DohertyOptimizedImage
                src="/img/arboles_frutales.png"
                alt="Árboles Frutales - Manzanos, perales, ciruelos"
                :width="400"
                :height="250"
                class="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-3 right-3">
                <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  Consultar
                </span>
              </div>
            </div>
            
            <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
                Árboles Frutales
              </h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                Manzanos, perales, ciruelos y variedades exóticas.
              </p>
              
              <ZeigarnikConsultation
                product-name="Árboles Frutales"
                product-image="/img/arboles_frutales.png"
              />
            </div>
          </div>

          <!-- Product Card 3: Plantas Florales -->
          <div class="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
            <div class="relative overflow-hidden">
              <DohertyOptimizedImage
                src="/img/plantas_florales.png"
                alt="Plantas Florales - Coloridas y aromáticas"
                :width="400"
                :height="250"
                class="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-3 right-3">
                <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  Consultar
                </span>
              </div>
            </div>
            
            <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
                Plantas Florales
              </h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                Coloridas y aromáticas, perfectas para decorar.
              </p>
              
              <ZeigarnikConsultation
                product-name="Plantas Florales"
                product-image="/img/plantas_florales.png"
              />
            </div>
          </div>
        </div>

        <!-- Call to Action for More Products -->
        <div class="text-center mt-8 sm:mt-12 lg:mt-16">
          <OptimizedButton
            variant="primary"
            size="xl"
            text="Ver Todos los Productos"
            to="/productos"
            class="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section - Cognitive Load Optimized -->
    <section id="contacto" class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">
            Contacto
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta sobre plantas y jardinería
          </p>
        </div>

        <!-- Cognitive Load Optimized Contact Component -->
        <CognitiveLoadContact />
      </div>
    </section>

    <!-- Floating WhatsApp Button - Fitts' Law Optimized -->
    <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a 
        href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha,%20me%20gustaría%20hacer%20una%20consulta"
        target="_blank"
        class="floating-whatsapp group"
        aria-label="Contactar por WhatsApp"
      >
        <!-- Mobile: 56px, Tablet+: 64px (Fitts' Law) -->
        <div class="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
          <i class="fab fa-whatsapp text-xl sm:text-2xl text-white"></i>
        </div>
        
        <!-- Tooltip with immediate feedback (Doherty Principle) -->
        <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Escríbenos por WhatsApp
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importar componentes optimizados con principios UX/UI
import OptimizedButton from '@/components/ui/OptimizedButton.vue'
import DohertyOptimizedImage from '@/components/ui/DohertyOptimizedImage.vue'
import ZeigarnikConsultation from '@/components/ui/ZeigarnikConsultation.vue'
import CognitiveLoadContact from '@/components/ui/CognitiveLoadContact.vue'
import { onMounted } from 'vue'

// Meta tags para SEO y responsividad
onMounted(() => {
  // Configurar meta tags dinámicamente
  document.title = 'Vivero Ganesha - Naturaleza y Espiritualidad | Plantas y Jardinería'
  
  // Meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 
      'Vivero Ganesha: plantas cítricas, árboles frutales, plantas florales y más. Cultivamos con amor y dedicación, inspirados por la sabiduría de Ganesha.'
    )
  }
  
  // Viewport para responsividad
  const viewport = document.querySelector('meta[name="viewport"]')
  if (viewport) {
    viewport.setAttribute('content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
    )
  }
})
</script>

<style scoped>
/* Mobile-First Responsive Styles */

/* Floating WhatsApp Animation */
.floating-whatsapp {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
.floating-whatsapp:focus {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-green-500 {
    background-color: #059669 !important;
  }
  
  .text-green-800 {
    color: #065f46 !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .floating-whatsapp {
    animation: none;
  }
  
  .transition-all,
  .transition-transform,
  .transition-colors,
  .transition-opacity {
    transition: none !important;
  }
}

/* Print styles */
@media print {
  .floating-whatsapp {
    display: none;
  }
  
  .bg-gradient-to-br {
    background: #16a34a !important;
    color: white !important;
  }
}

/* Touch target improvements for mobile */
@media (hover: none) and (pointer: coarse) {
  /* Increase touch targets on mobile */
  .floating-whatsapp {
    width: 64px !important;
    height: 64px !important;
  }
}
</style>