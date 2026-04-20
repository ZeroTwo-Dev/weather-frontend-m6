import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/lugar/:id', name: 'detalle', component: DetalleView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router