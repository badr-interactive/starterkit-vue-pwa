import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Hello from '@/components/Hello'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
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
      next({name: 'Login'})
    }
  }
  next()
})

export default router

