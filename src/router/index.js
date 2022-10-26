import { createRouter, createWebHistory } from 'vue-router'
// import  {useAuth} from '../'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'barang.index',
      component: () => import('../views/barang/Index.vue'),
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/create',
      name: 'barang.create',
      component: () => import('../views/barang/Create.vue'),
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/edit/:id',
      name: 'barang.edit',
      component: () => import('../views/barang/Edit.vue'),
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/register',
      name: 'auth.register',
      component: () => import('../views/auth/Register.vue'),
      // meta: {
      //   authPage: true
      // }
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('../views/auth/Login.vue'),
      // meta: {
      //   authPage: true
      // }
    },
    {
      path: '/supplier',
      name: 'supplier.list',
      component: () => import('../views/supplier/ListSupplier.vue'),
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/supplier-edit/:id',
      name: 'supplier.edit',
      component: () => import('../views/supplier/EditSupplier.vue'),
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/supplier-create',
      name: 'supplier.create',
      component: () => import('../views/supplier/CreateSupplier.vue'),
      // meta: {
      //   requireAuth: true
      // }
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
const isAuthenticated = localStorage.getItem('token') ;
router.beforeEach((to, from, next)=>{
  if(to.name !== "auth.login" && isAuthenticated==''){
   next({name:"auth.login"})
  }  
    else next();
})
  // if(to.name !== 'auth.login' && !isAuthenticated) next({name : 'auth.login'})
   // else next();
//   if(to.meta.requireAuth){
//     const auth = useAuth()
//     await auth.getUser()
//     if(auth.user){
//       next()
//     }else{
//       next(
//         {
//           name : 'auth.login'
//         }
//       )
//     }
//   }
//   if(to.meta.authPage){
//     const auth = useAuth()
//     await auth.getUser()
//     if(!auth.user){
//       next()
//     }else{
//       next(from)
//     }
//   }
// })

export default router
