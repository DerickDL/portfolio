import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../pages/about/components/About.vue'
import Experience from '../pages/experience/Experience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
  ]
})

export default router
