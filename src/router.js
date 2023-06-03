
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
    { name:'home', path: '/', component: Home },
    { name:'login', path: '/login', component: () => import('./pages/Login.vue') },
    { name:'register', path: '/register', component: () => import('./pages/Register.vue') },
    { name:'postjob', path: '/post-job', component: () => import('./pages/PostJob.vue') },
  ]
  

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export function routerPush (name, params) {
  return params !== undefined
    ? router.push({
      name,
      params,
    })
    : router.push({ name })
}