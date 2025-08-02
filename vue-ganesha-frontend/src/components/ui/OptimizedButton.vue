<template>
  <component 
    :is="tag"
    :class="buttonClasses"
    v-bind="linkProps"
    @click="handleClick"
  >
    <i v-if="icon" :class="iconClasses"></i>
    <span>{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  text: string
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'floating'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  href?: string
  to?: string
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const emit = defineEmits<{
  click: [event: Event]
}>()

<style scoped>
/* Aplicando Ley de Fitts: targets mínimos de 44px (táctil) y 32px (mouse) */
.btn-base {
  font-weight: bold;
  border-radius: 9999px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.btn-base:focus {
  ring: 4px;
}

/* Variants */
.btn-primary {
  background-color: #10b981;
  color: white;
}

.btn-primary:hover {
  background-color: #059669;
}

.btn-primary:focus {
  ring-color: rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  border: 2px solid #10b981;
  color: #10b981;
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: #10b981;
  color: white;
}

.btn-secondary:focus {
  ring-color: rgba(16, 185, 129, 0.3);
}

.btn-whatsapp {
  background-color: #10b981;
  color: white;
}

.btn-whatsapp:hover {
  background-color: #059669;
}

.btn-whatsapp:focus {
  ring-color: rgba(16, 185, 129, 0.3);
}

.btn-floating {
  background-color: #10b981;
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.btn-floating:hover {
  background-color: #059669;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.btn-floating:focus {
  ring-color: rgba(16, 185, 129, 0.3);
}

/* Tamaños optimizados según Ley de Fitts */
.btn-sm {
  min-height: 32px;
  min-width: 32px;
  padding: 6px 12px;
  font-size: 0.875rem;
}

.btn-md {
  min-height: 44px;
  min-width: 44px;
  padding: 8px 16px;
  font-size: 1rem;
}

.btn-lg {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;
  font-size: 1.125rem;
}

.btn-xl {
  min-height: 56px;
  min-width: 56px;
  padding: 16px 32px;
  font-size: 1.25rem;
}

/* Icon sizes */
.icon-sm {
  font-size: 0.875rem;
  margin-right: 4px;
}

.icon-md {
  font-size: 1rem;
  margin-right: 8px;
}

.icon-lg {
  font-size: 1.125rem;
  margin-right: 8px;
}

.icon-xl {
  font-size: 1.25rem;
  margin-right: 12px;
}

/* Mobile-first responsive adjustments */
@media (max-width: 640px) {
  .btn-lg, .btn-xl {
    width: 100%;
    justify-content: center;
  }
}
</style>

const iconClasses = computed(() => {
  const sizeMap = {
    sm: 'text-sm mr-1',
    md: 'text-base mr-2', 
    lg: 'text-lg mr-2',
    xl: 'text-xl mr-3'
  }
  return `${props.icon} ${sizeMap[props.size]}`
})

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return 'button'
})

const linkProps = computed(() => {
  if (props.href) return { href: props.href, target: props.target }
  if (props.to) return { to: props.to }
  return {}
})

const handleClick = (event: Event) => {
  emit('click', event)
}
</script>
