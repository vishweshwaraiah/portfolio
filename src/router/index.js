import { createRouter, createWebHistory } from 'vue-router'
import MyResume from '@/views/MyResume.vue'
import MyProjects from '@/views/MyProjects.vue'
import CoverLetter from '@/views/CoverLetter.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import AboutDev from '@/views/AboutDev.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyResume
    },
    {
      path: '/projects',
      name: 'projects',
      component: MyProjects
    },
    {
      path: '/coverletter',
      name: 'coverletter',
      component: CoverLetter
    },
    {
      path: '/about',
      name: 'about',
      component: AboutDev
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: PageNotFound
    }
  ]
})

export default router
