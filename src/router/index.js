import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
    path: '/schemeOperation',
    name: 'SchemeOperation',
    component: () => import('../views/SchemeOperation.vue')
  },
  {
    path: '/siteview',
    name: 'SiteView',
    component: () => import('../views/SiteView.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const [routerPush, routerReplace] = [VueRouter.prototype.push, VueRouter.prototype.replace]
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error)
}

