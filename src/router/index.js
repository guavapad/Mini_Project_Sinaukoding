import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'barang.index',
      component: () => import('../views/barang/Index.vue')
    },
    {
      path: '/create',
      name: 'barang.create',
      component: () => import('../views/barang/Create.vue')
    },
    {
      path: '/edit',
      name: 'barang.edit',
      component: () => import('../views/barang/Edit.vue')
    },
    {
      path: '/register',
      name: 'auth.register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/supplier',
      name: 'supplier.list',
      component: () => import('../views/supplier/ListSupplier.vue')
    },
    {
      path: '/supplier-edit',
      name: 'supplier.edit',
      component: () => import('../views/supplier/EditSupplier.vue')
    },
    {
      path: '/supplier-create',
      name: 'supplier.create',
      component: () => import('../views/supplier/CreateSupplier.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
