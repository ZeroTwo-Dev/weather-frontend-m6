<template>
  <div class="teyvat-container">
    <header>
      <h1>Clima de Teyvat</h1>
      <input 
        v-model="filtro" 
        type="text" 
        placeholder="Buscar región..." 
        class="search-input"
      />
    </header>

    <div class="regiones-grid">
      <div v-for="region in regionesFiltradas" :key="region.id" class="card">
        <h3>{{ region.nombre }}</h3>
        <p>Actual: {{ region.tempActual }}°C</p>
        <router-link :to="'/lugar/' + region.id" class="btn">
          Ver Detalles
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import datosClima from '../data/clima.json'

const filtro = ref('')
const regiones = ref(datosClima)

// Propiedad computada para el filtrado reactivo
const regionesFiltradas = computed(() => {
  return regiones.value.filter(r => 
    r.nombre.toLowerCase().includes(filtro.value.toLowerCase())
  )
})
</script>