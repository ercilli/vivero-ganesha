<template>
  <div class="space-y-1">
    <div v-for="(day, dayName) in daysDisplay" :key="dayName" class="flex justify-between">
      <span class="font-medium capitalize">{{ formatDayName(dayName) }}:</span>
      <span class="text-right">{{ day.isOpen ? formatHours(day) : 'Cerrado' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WorkingHours } from '@/types'

interface Props {
  hours: WorkingHours
}

const props = defineProps<Props>()

// Day names in Spanish
const dayNames: Record<string, string> = {
  monday: 'lunes',
  tuesday: 'martes',
  wednesday: 'miércoles',
  thursday: 'jueves',
  friday: 'viernes',
  saturday: 'sábado',
  sunday: 'domingo'
}

// Computed properties
const daysDisplay = computed(() => {
  if (!props.hours) return {}
  
  // Order days starting from Monday
  const orderedDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const result: Record<string, any> = {}
  
  orderedDays.forEach(day => {
    result[day] = props.hours[day as keyof WorkingHours]
  })
  
  return result
})

// Methods
const formatDayName = (dayKey: string): string => {
  return dayNames[dayKey] || dayKey
}

const formatHours = (day: any): string => {
  if (!day.isOpen) return 'Cerrado'
  
  const parts = []
  
  if (day.morning) {
    parts.push(`${day.morning.start} - ${day.morning.end}`)
  }
  
  if (day.afternoon) {
    parts.push(`${day.afternoon.start} - ${day.afternoon.end}`)
  }
  
  return parts.join(' y ')
}
</script>
