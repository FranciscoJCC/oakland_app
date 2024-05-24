import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/posts/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lista de publicaciones',
      component: IndexView
    },
    {
      path: '/dashboard/categories',
      name: 'Administración de categorias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/categories/IndexView.vue')
    },
    {
      path: '/dashboard/thematics',
      name: 'Administración de temáticas',
      component: () => import('../views/thematics/IndexView.vue')
    }
  ]
})

export default router
