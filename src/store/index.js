import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import group from './modules/group'
import site from './modules/site'
import treeSite from './modules/treeSite'
import scheme from './modules/scheme'
import gameInfo from './modules/gameInfo'
import ag from './modules/ag'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({}),
  mutations: {},
  actions: {},
  modules: {
    user,
    group,
    site,
    treeSite,
    scheme,
    gameInfo,
    ag
  }
})
