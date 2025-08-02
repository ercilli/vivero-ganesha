<template>
  <div id="app" class="min-h-screen bg-green-50">
    <!-- Simple Header -->
    <header class="bg-green-800 text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold">🌿 Vivero Ganesha</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Simple Footer -->
    <footer class="bg-green-800 text-white py-8 mt-16">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Vivero Ganesha. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Vue app with router loaded successfully!')
})
</script>
