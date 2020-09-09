import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'

import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router


/*
import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '../views/Inicio'
import Auth from '../views/Auth'
import NotFound from '../views/NotFound'

import * as firebase from "firebase"
// import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
});


router.beforeEach((to, from, next) => {

  const requiresAuth    = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  
  if(requiresAuth && !isAuthenticated){
    // requiere login y no esta logueado
    next({name: "auth"})
  } else {
    next();
  }

})


export default router
*/