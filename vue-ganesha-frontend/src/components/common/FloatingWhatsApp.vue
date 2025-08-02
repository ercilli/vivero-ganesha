<template>
  <Teleport to="body">
    <a 
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 whatsapp-btn bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all duration-300 z-50 hover:scale-110"
      aria-label="Contactar por WhatsApp"
      @mouseenter="onHover"
      @mouseleave="onLeave"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
    
    <!-- Tooltip -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-show="showTooltip"
        class="fixed bottom-20 right-6 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg z-50 whitespace-nowrap"
      >
        ¡Escríbenos por WhatsApp!
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()
const showTooltip = ref(false)

// Computed properties
const whatsappUrl = computed(() => {
  const number = contentStore.contactInfo?.whatsappNumber || '5491169011279'
  const message = encodeURIComponent('Hola Vivero Ganesha, me gustaría hacer una consulta')
  return `https://wa.me/${number}?text=${message}`
})

// Methods
const onHover = () => {
  showTooltip.value = true
}

const onLeave = () => {
  showTooltip.value = false
}
</script>

<style scoped>
.whatsapp-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>
