import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
];
const router = new Router({routes,mode:'history'})

// router.beforeEach((to, from, next) => {
//   if(to.meta.auth) {
//     const authUser = JSON.parse(window.localStorage.getItem('user'))
//     if(!authUser || !authUser.token) {
//       next({name:'login'})
//     } else if(to.meta.adminAuth) {
//       const authUser = JSON.parse(window.localStorage.getItem('user'))
//       if(authUser.data.role_id === 'ADMIN') {
//         next()
//       }else {
//         next('/resident')
//       }
//     } else if(to.meta.residentAuth) {
//       const authUser = JSON.parse(window.localStorage.getItem('user'))
//       if(authUser.data.role_id === 'RESIDENT') {
//         next()
//       }else {
//         console.log('Im in admin')
//         next('/admin')
//       }
//     } else {
//       next({name: 'login'})
//     }
//   }
// })

export default router;

