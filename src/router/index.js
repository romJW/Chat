import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
const routes = [
    {
        path: '/',
        component: Home,
      },
  {
    path: '/chat',
    component: () => import('../views/сhat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
