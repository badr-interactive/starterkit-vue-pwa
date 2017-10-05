import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

const router = new Router({
  routes: [
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
  ],
  mode:'history'
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem('user'))
  if(to.meta.auth == true) {
    console.log(auth);
    if(!auth || !auth.token) {
      next({name: 'login'})
    }
  }
  next()
})

export default router

