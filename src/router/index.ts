import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-s,plitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dosen',
      name: 'dosen',
      // route level code-s,plitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dosen/DosenEntryView.vue')
    },
    {
      path: '/mahasiswa',
      name: 'mahasiswa',
      // route level code-s,plitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mahasiswa/MahasiswaEntryView.vue')
    },
    {
      path: '/ruangan',
      name: 'ruangan',
      // route level code-s,plitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ruangan/RuanganView.vue')
    }
 
    
  ]
})

export default router
