import { createRouter, createWebHistory } from 'vue-router'
import MyResume from '@/views/MyResume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyResume
    },
    {
      path: '/coverletter',
      name: 'coverletter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CoverLetter.vue')
    }
  ]
})

export default router
