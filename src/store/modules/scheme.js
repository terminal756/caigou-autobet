import { getScheme, addScheme, updateScheme, deleteScheme } from '../../api/api'

const scheme = {
  namespaced: true,
  state: () => ({
    schemeList: []
  }),
  getters: {
    getSitesBySchemeId: (state) => (schemeId) => {
      let sites = []
      state.schemeList.forEach((scheme) => {
        if (scheme.schemeId === schemeId) {
          sites = scheme.sites
        }
      })
      return sites
    }
  },
  mutations: {
    get(state, payload) {
      if (payload) state.schemeList = payload
      // console.log('state.schemeList', state.schemeList)
    },
    add(state, payload) {
      state.schemeList.push(payload)
    },
    update(state, payload) {
      if (state.schemeList) {
        const index = state.schemeList.findIndex((s) => s.schemeId === payload.schemeId)
        state.schemeList.splice(index, 1, payload)
      }
    },
    delete(state, payload) {
      state.schemeList.splice(payload.index, 1)
    }
  },
  actions: {
    async getSchemeAsync({ commit }) {
      const res = await getScheme()
      if (res.code === 0) {
        commit('get', res.data)
      }
      return res
    },
    async addSchemeAsync({ commit }, payload) {
      const res = await addScheme(payload)
      if (res.code === 0) {
        commit('add', payload)
      }
      return res
    },
    async updateSchemeAsync({ commit }, payload) {
      const res = await updateScheme(payload)
      if (res.code === 0) {
        commit('update', payload)
      }
      return res
    },
    async deleteSchemeAsync({ commit }, payload) {
      const res = await deleteScheme({ schemeId: payload.schemeId })
      if (res.code === 0) {
        commit('delete', payload)
      }
      return res
    }
  }
}

export default scheme
