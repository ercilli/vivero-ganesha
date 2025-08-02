<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="py-16 bg-ganesha-green-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Estamos aquí para ayudarte con cualquier consulta sobre plantas y jardinería
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@/composables/useHead'
import ContactSection from '@/components/sections/ContactSection.vue'

onMounted(() => {
  useHead({
    title: 'Contacto - Vivero Ganesha',
    meta: [
      { name: 'description', content: 'Contacta con Vivero Ganesha para consultas sobre plantas y jardinería. Encuentra nuestra ubicación, horarios y formas de contacto.' }
    ]
  })
})
</script>
