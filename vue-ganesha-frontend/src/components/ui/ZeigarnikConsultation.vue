<template>
  <div class="consultation-tracker">
    <!-- Indicador de progreso (Efecto Zeigarnik) -->
    <div class="progress-indicator" v-if="showProgress">
      <div class="progress-steps">
        <div 
          v-for="(step, index) in consultationSteps" 
          :key="index"
          :class="getStepClass(index)"
          class="progress-step"
        >
          <div class="step-circle">
            <i :class="step.icon" v-if="index <= currentStep"></i>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span class="step-label">{{ step.label }}</span>
        </div>
      </div>
      
      <!-- Mensaje motivacional basado en Zeigarnik -->
      <div class="progress-message">
        <p class="text-sm text-green-700">
          {{ getProgressMessage() }}
        </p>
      </div>
    </div>

    <!-- Botón de consulta con tracking -->
    <OptimizedButton
      :variant="buttonVariant"
      size="md"
      icon="fab fa-whatsapp"
      :text="buttonText"
      @click="handleConsultation"
    />

    <!-- Recordatorio de consulta pendiente -->
    <div v-if="hasPendingConsultation" class="pending-reminder">
      <div class="reminder-card">
        <i class="fas fa-clock text-yellow-500 mr-2"></i>
        <span class="text-sm">Tienes una consulta pendiente sobre {{ lastConsultationProduct }}</span>
        <button @click="continuePendingConsultation" class="ml-2 text-green-600 hover:text-green-800 text-sm underline">
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import OptimizedButton from './OptimizedButton.vue'

interface ConsultationStep {
  label: string
  icon: string
  completed: boolean
}

interface Props {
  productName?: string
  productImage?: string
}

const props = defineProps<Props>()

const currentStep = ref(0)
const showProgress = ref(false)
const consultationStarted = ref(false)
const lastConsultationProduct = ref('')

// Estados del proceso (Efecto Zeigarnik: tarea incompleta es recordada)
const consultationSteps: ConsultationStep[] = [
  { label: 'Consulta', icon: 'fas fa-check', completed: false },
  { label: 'WhatsApp', icon: 'fab fa-whatsapp', completed: false },
  { label: 'Respuesta', icon: 'fas fa-reply', completed: false },
  { label: 'Compra', icon: 'fas fa-shopping-cart', completed: false }
]

const buttonVariant = computed(() => {
  return consultationStarted.value ? 'secondary' : 'whatsapp'
})

const buttonText = computed(() => {
  if (consultationStarted.value) {
    return 'Continuar en WhatsApp'
  }
  return props.productName ? `Consultar ${props.productName}` : 'Consultar'
})

const hasPendingConsultation = computed(() => {
  return lastConsultationProduct.value && currentStep.value > 0 && currentStep.value < 3
})

const handleConsultation = () => {
  if (!consultationStarted.value) {
    startConsultation()
  } else {
    continueConsultation()
  }
}

const startConsultation = () => {
  consultationStarted.value = true
  currentStep.value = 1
  showProgress.value = true
  lastConsultationProduct.value = props.productName || 'producto'
  
  // Guardar en localStorage (persistencia del estado incompleto)
  localStorage.setItem('ganesha_consultation', JSON.stringify({
    product: props.productName,
    step: currentStep.value,
    timestamp: new Date().toISOString()
  }))
  
  // Abrir WhatsApp
  openWhatsApp()
}

const continueConsultation = () => {
  currentStep.value = Math.min(currentStep.value + 1, consultationSteps.length - 1)
  updateConsultationStorage()
  openWhatsApp()
}

const continuePendingConsultation = () => {
  openWhatsApp()
}

const openWhatsApp = () => {
  const message = encodeURIComponent(
    `Hola Vivero Ganesha, consulto por ${props.productName || 'sus productos'}`
  )
  window.open(`https://wa.me/5491169011279?text=${message}`, '_blank')
  
  // Marcar que el usuario fue a WhatsApp
  setTimeout(() => {
    if (currentStep.value === 1) {
      currentStep.value = 2
      updateConsultationStorage()
    }
  }, 3000) // Asumimos que en 3 segundos ya abrió WhatsApp
}

const getStepClass = (index: number) => {
  if (index < currentStep.value) return 'step-completed'
  if (index === currentStep.value) return 'step-current'
  return 'step-pending'
}

const getProgressMessage = () => {
  const messages = [
    '¡Empezemos tu consulta!',
    '¡Genial! Ahora te conectamos con WhatsApp',
    'Esperando tu mensaje... ¿Ya escribiste?',
    '¡Casi listo para tu compra!'
  ]
  return messages[currentStep.value] || messages[0]
}

const updateConsultationStorage = () => {
  localStorage.setItem('ganesha_consultation', JSON.stringify({
    product: lastConsultationProduct.value,
    step: currentStep.value,
    timestamp: new Date().toISOString()
  }))
}

const loadConsultationState = () => {
  const stored = localStorage.getItem('ganesha_consultation')
  if (stored) {
    try {
      const data = JSON.parse(stored)
      const timeDiff = new Date().getTime() - new Date(data.timestamp).getTime()
      const hoursDiff = timeDiff / (1000 * 3600)
      
      // Si la consulta tiene menos de 24 horas, restaurar estado
      if (hoursDiff < 24 && data.step < 3) {
        lastConsultationProduct.value = data.product
        currentStep.value = data.step
        consultationStarted.value = true
        showProgress.value = true
      }
    } catch (e) {
      console.log('Error loading consultation state:', e)
    }
  }
}

onMounted(() => {
  loadConsultationState()
})
</script>

<style scoped>
.consultation-tracker {
  @apply space-y-4;
}

.progress-indicator {
  @apply bg-green-50 p-4 rounded-lg border border-green-200;
}

.progress-steps {
  @apply flex justify-between items-center mb-3;
}

.progress-step {
  @apply flex flex-col items-center space-y-1 flex-1;
}

.step-circle {
  @apply w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300;
}

.step-completed .step-circle {
  @apply bg-green-500 text-white;
}

.step-current .step-circle {
  @apply bg-yellow-500 text-white animate-pulse;
}

.step-pending .step-circle {
  @apply bg-gray-200 text-gray-500;
}

.step-label {
  @apply text-xs text-center;
}

.step-completed .step-label {
  @apply text-green-600 font-medium;
}

.step-current .step-label {
  @apply text-yellow-600 font-medium;
}

.step-pending .step-label {
  @apply text-gray-400;
}

.progress-message {
  @apply text-center;
}

.pending-reminder {
  @apply mt-4;
}

.reminder-card {
  @apply bg-yellow-50 border border-yellow-200 p-3 rounded-lg flex items-center text-sm;
}
</style>
