import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
