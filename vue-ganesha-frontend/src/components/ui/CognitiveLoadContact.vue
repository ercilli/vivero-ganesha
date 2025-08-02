<template>
  <div class="cognitive-load-optimized">
    <!-- Chunk 1: Información esencial (7±2 elementos) -->
    <div class="info-chunk primary-chunk">
      <h3 class="chunk-title">
        <i class="fas fa-store mr-2"></i>
        Información Esencial
      </h3>
      <div class="info-grid">
        <div class="info-item" v-for="item in essentialInfo" :key="item.id">
          <div class="info-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="info-content">
            <h4 class="info-label">{{ item.label }}</h4>
            <p class="info-value">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Chunk 2: Horarios (agrupación lógica) -->
    <div class="info-chunk secondary-chunk">
      <h3 class="chunk-title">
        <i class="fas fa-clock mr-2"></i>
        Horarios de Atención
      </h3>
      <div class="schedule-grid">
        <div class="schedule-item" v-for="schedule in scheduleInfo" :key="schedule.days">
          <span class="schedule-days">{{ schedule.days }}</span>
          <span class="schedule-hours">{{ schedule.hours }}</span>
          <span class="schedule-status" :class="getScheduleStatusClass(schedule)">
            {{ getScheduleStatus(schedule) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Chunk 3: Acciones rápidas (máximo 3 acciones principales) -->
    <div class="info-chunk action-chunk">
      <h3 class="chunk-title">
        <i class="fas fa-bolt mr-2"></i>
        Contacto Rápido
      </h3>
      <div class="quick-actions">
        <OptimizedButton
          v-for="action in quickActions"
          :key="action.id"
          :variant="action.variant"
          size="lg"
          :icon="action.icon"
          :text="action.text"
          :href="action.href"
          :target="action.target"
          @click="trackAction(action.id)"
        />
      </div>
    </div>

    <!-- Progressive Disclosure: información secundaria colapsable -->
    <div class="info-chunk expandable-chunk">
      <button 
        @click="toggleExpanded"
        class="expand-button"
        :aria-expanded="isExpanded"
      >
        <i class="fas fa-info-circle mr-2"></i>
        Información Adicional
        <i :class="isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="ml-auto"></i>
      </button>
      
      <transition name="expand">
        <div v-show="isExpanded" class="expanded-content">
          <div class="additional-info">
            <div class="info-section" v-for="section in additionalInfo" :key="section.title">
              <h4 class="section-title">{{ section.title }}</h4>
              <ul class="section-list">
                <li v-for="item in section.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import OptimizedButton from './OptimizedButton.vue'

interface InfoItem {
  id: string
  label: string
  value: string
  icon: string
}

interface ScheduleItem {
  days: string
  hours: string
  isActive: boolean
}

interface QuickAction {
  id: string
  text: string
  variant: 'primary' | 'secondary' | 'whatsapp'
  icon: string
  href?: string
  target?: string
}

interface AdditionalInfo {
  title: string
  items: string[]
}

const isExpanded = ref(false)

// Chunk 1: Información esencial (máximo 7 elementos según Miller's Law)
const essentialInfo: InfoItem[] = [
  {
    id: 'address',
    label: 'Dirección',
    value: 'Thorne 3055, Ituzaingo',
    icon: 'fas fa-map-marker-alt text-red-500'
  },
  {
    id: 'phone',
    label: 'Teléfono',
    value: '+54 9 1169011279',
    icon: 'fas fa-phone text-blue-500'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Disponible 24/7',
    icon: 'fab fa-whatsapp text-green-500'
  },
  {
    id: 'specialty',
    label: 'Especialidad',
    value: 'Plantas y jardinería',
    icon: 'fas fa-leaf text-green-600'
  }
]

// Chunk 2: Horarios agrupados lógicamente
const scheduleInfo: ScheduleItem[] = [
  { days: 'Lunes a Viernes', hours: '10:00 - 13:00 y 17:00 - 19:00', isActive: true },
  { days: 'Sábados', hours: '9:00 - 13:00', isActive: true },
  { days: 'Domingos', hours: 'Cerrado', isActive: false }
]

// Chunk 3: Máximo 3 acciones principales (reducir opciones según Hick's Law)
const quickActions: QuickAction[] = [
  {
    id: 'whatsapp',
    text: 'WhatsApp',
    variant: 'whatsapp',
    icon: 'fab fa-whatsapp',
    href: 'https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha',
    target: '_blank'
  },
  {
    id: 'call',
    text: 'Llamar',
    variant: 'primary',
    icon: 'fas fa-phone',
    href: 'tel:+5491169011279'
  },
  {
    id: 'directions',
    text: 'Ir al local',
    variant: 'secondary',
    icon: 'fas fa-directions',
    href: 'https://maps.google.com/?q=Thorne+3055+Ituzaingo',
    target: '_blank'
  }
]

// Progressive Disclosure: información secundaria
const additionalInfo: AdditionalInfo[] = [
  {
    title: 'Servicios',
    items: ['Asesoramiento gratuito', 'Entrega a domicilio', 'Diseño de jardines', 'Mantenimiento']
  },
  {
    title: 'Formas de Pago',
    items: ['Efectivo', 'Transferencia bancaria', 'Mercado Pago', 'Tarjetas de débito']
  },
  {
    title: 'Garantías',
    items: ['15 días en plantas', 'Asesoramiento post-venta', 'Cambios por plantas defectuosas']
  }
]

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const getScheduleStatus = (schedule: ScheduleItem) => {
  return schedule.isActive ? 'Abierto' : 'Cerrado'
}

const getScheduleStatusClass = (schedule: ScheduleItem) => {
  return schedule.isActive ? 'status-open' : 'status-closed'
}

const trackAction = (actionId: string) => {
  // Analytics tracking
  console.log(`Action clicked: ${actionId}`)
}
</script>

<style scoped>
.cognitive-load-optimized {
  @apply space-y-6 max-w-4xl mx-auto;
}

/* Chunking visual: cada chunk tiene su propio contenedor */
.info-chunk {
  @apply bg-white rounded-xl shadow-lg p-6 border-l-4;
}

.primary-chunk {
  @apply border-green-500;
}

.secondary-chunk {
  @apply border-blue-500;
}

.action-chunk {
  @apply border-yellow-500;
}

.expandable-chunk {
  @apply border-gray-300;
}

.chunk-title {
  @apply text-xl font-bold text-gray-800 mb-4 flex items-center;
}

/* Grid para reducir carga visual */
.info-grid {
  @apply grid md:grid-cols-2 gap-4;
}

.info-item {
  @apply flex items-start space-x-3 p-3 bg-gray-50 rounded-lg;
}

.info-icon {
  @apply flex-shrink-0 w-8 h-8 flex items-center justify-center;
}

.info-content {
  @apply flex-1 min-w-0;
}

.info-label {
  @apply text-sm font-medium text-gray-600;
}

.info-value {
  @apply text-base font-semibold text-gray-900;
}

/* Horarios con jerarquía visual clara */
.schedule-grid {
  @apply space-y-3;
}

.schedule-item {
  @apply flex justify-between items-center p-3 bg-blue-50 rounded-lg;
}

.schedule-days {
  @apply font-medium text-gray-800;
}

.schedule-hours {
  @apply text-gray-600;
}

.schedule-status {
  @apply px-2 py-1 rounded-full text-xs font-bold;
}

.status-open {
  @apply bg-green-100 text-green-800;
}

.status-closed {
  @apply bg-red-100 text-red-800;
}

/* Acciones con espaciado adecuado */
.quick-actions {
  @apply flex flex-col md:flex-row gap-4 justify-center;
}

/* Progressive Disclosure */
.expand-button {
  @apply w-full flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-700 font-medium;
}

.expanded-content {
  @apply mt-4;
}

.additional-info {
  @apply grid md:grid-cols-3 gap-4;
}

.info-section {
  @apply bg-gray-50 p-4 rounded-lg;
}

.section-title {
  @apply font-medium text-gray-800 mb-2;
}

.section-list {
  @apply space-y-1;
}

.section-list li {
  @apply text-sm text-gray-600;
}

/* Transiciones suaves */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
