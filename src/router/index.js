import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SiteGroup from '../views/SiteGroup'
import Scheme from '../views/Scheme'
import SchemeDetails from '../views/SchemeDetails'
import SchemeOperation from '../views/SchemeOperation'
import SiteView from '../views/SiteView'

Vue.use(VueRouter)

const routes = [
  { path: '/home', redirect: '/' },
  { path: '/', name: 'Home', component: Home },
  { path: '/sitegroup', name: 'SiteGroup', component: SiteGroup },
  { path: '/scheme', name: 'Scheme', Scheme },
  { path: '/schemeDetails', name: 'SchemeDetails', component: SchemeDetails },
  {
    path: '/schemeOperation',
    name: 'SchemeOperation',
    component: SchemeOperation
  },
  { path: '/siteview', name: 'SiteView', component: SiteView }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
