import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ChartView from '@/views/ChartView.vue'
import D3View from '@/views/D3View.vue'
import PieView from '@/views/PieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/chart', name: 'chart', component: ChartView },
    { path: '/d3', name: 'd3', component: D3View },
    { path: '/pie', name: 'pie', component: PieView }
  ]
})

export default router
