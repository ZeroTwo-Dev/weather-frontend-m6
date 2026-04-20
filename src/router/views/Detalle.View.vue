<template>
  <div v-if="region" class="detalle-glass">
    <router-link to="/">⬅ Volver al Inicio</router-link>
    <h2>{{ region.nombre }}</h2>

    <div class="stats">
      <p>Promedio: {{ estadisticas.promedio }}°C</p>
      <p>Máxima: {{ estadisticas.max }}°C</p>
      <p>Mínima: {{ estadisticas.min }}°C</p>
    </div>

    <h3>Pronóstico Semanal</h3>
    <ul>
      <li v-for="dia in region.pronosticoSemanal" :key="dia.fecha">
        {{ dia.fecha }}: {{ dia.temp }}°C
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import datosClima from '../data/clima.json'

const props = defineProps(['id'])
const region = datosClima.find(r => r.id == props.id)

const estadisticas = computed(() => {
  const temps = region.pronosticoSemanal.map(d => d.temp)
  return {
    max: Math.max(...temps),
    min: Math.min(...temps),
    promedio: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1)
  }
})
</script>