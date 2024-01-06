import { createRouter, createWebHistory } from 'vue-router'
import MyPortfolio from '@/views/MyPortfolio.vue'
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
      name: 'Portfolio',
      component: MyPortfolio,
      meta: {
        hidden: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: MyResume,
      meta: {
        hidden: false
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MyProjects,
      meta: {
        hidden: false
      }
    },
    {
      path: '/coverletter',
      name: 'Cover letter',
      component: CoverLetter,
      meta: {
        hidden: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutDev,
      meta: {
        hidden: false
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: PageNotFound,
      meta: {
        hidden: true
      }
    }
  ]
})

export default router
