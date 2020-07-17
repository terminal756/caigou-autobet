import { getTreeSite } from '../../api/api'

const treeSite = {
  namespaced: true,
  state: () => ({ treeSite: [] }),
  getters: {},

  mutations: {
    getTreeSite(state, treeSite) {
      state.treeSite = treeSite || []
    }
  },
  actions: {
    async getTreeSiteAsync({ commit }) {
      const res = await getTreeSite()
      if (res.code === 0) {
        commit('getTreeSite', res.data)
      }
      return res
    }
  }
}

export default treeSite
