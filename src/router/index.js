import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/sitegroup',
    name: 'SiteGroup',
    component: () => import('../views/SiteGroup.vue')
  },
  {
    path: '/scheme',
    name: 'Scheme',
    component: () => import('../views/Scheme.vue')
  },
  {
    path: '/schemeDetails',
    name: 'SchemeDetails',
    component: () => import('../views/SchemeDetails.vue')
  },
  {
    path: '/siteview',
    name: 'SiteView',
    component: () => import('../views/SiteView.vue')
  },
  {
    path: '/siteiframe',
    name: 'SiteIframe',
    component: () => import('../views/SiteIframe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
