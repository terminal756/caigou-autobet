import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@views/Home'
import Scheme from '@views/Scheme'
import SiteView from '@views/SiteView'
import SiteGroup from '@views/SiteGroup'
import SchemeDetails from '@views/SchemeDetails'
import SchemeOperation from '@views/SchemeOperation'

// js中引用vuex
// import user from '@/store/modules/user'
// console.log(user.state().username)

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/scheme', name: 'Scheme', component: Scheme },
  { path: '/siteview', name: 'SiteView', component: SiteView },
  { path: '/sitegroup', name: 'SiteGroup', component: SiteGroup },
  { path: '/schemeDetails', name: 'SchemeDetails', component: SchemeDetails },
  {
    path: '/schemeOperation',
    name: 'SchemeOperation',
    component: SchemeOperation
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
