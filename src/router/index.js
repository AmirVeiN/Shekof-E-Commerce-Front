import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/:category_slug/:product_slug/',
      name: 'Product',
      component: () => import('../views/product.vue')
    },
  ]
})

export default router
