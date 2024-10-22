import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import PresencaView from '@/views/PresencaView.vue'
import HistoriaView from '@/views/HistoriaView.vue'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/confirmar',
    name: 'Presencaview',
    component: PresencaView
  },
  {
    path: '/historia',
    name: 'HistoriaView',
    component: HistoriaView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
