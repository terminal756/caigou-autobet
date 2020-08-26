import { getScheme, addScheme, updateScheme, deleteScheme } from '@/api/scheme'
const scheme = {
  namespaced: true,
  state: () => ({
    schemeList: [],
    operationList: []
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
    },
    currentOperation: (state) => (schemeId) => {
      return state.operationList.find((o) => o.schemeId === schemeId)
    }
  },
  mutations: {
    getScheme(state, payload) {
      if (payload) state.schemeList = payload
    },
    addScheme(state, payload) {
      state.schemeList.push(payload)
    },
    updateScheme(state, payload) {
      if (state.schemeList) {
        const index = state.schemeList.findIndex((s) => s.schemeId === payload.schemeId)
        state.schemeList.splice(index, 1, payload)
      }
    },
    DELETE_SCHEME(state, payload) {
      state.schemeList.splice(payload.index, 1)
    },
    addOperation(state, payload) {
      if (state.operationList.length) {
        if (!state.operationList.find((s) => s.schemeId === payload.schemeId)) {
          state.operationList.push(payload)
        }
      } else {
        state.operationList.push(payload)
      }
    },
    updateOperation(state, payload) {
      const schemeIndex = state.operationList.findIndex((o) => o.schemeId === payload.schemeId)
      for (const site of payload.sites) {
        const siteIndex = state.operationList[schemeIndex].sites.findIndex((s) => s.siteId === site.siteId)
        state.operationList[schemeIndex].sites.splice(siteIndex, 1, site)
      }
    },
    deleteOperation(state, payload) {
      state.operationList.splice(payload, 1)
    }
  },
  actions: {
    async getSchemeAsync({ commit }) {
      const res = await getScheme()
      if (res.code === 0) {
        commit('getScheme', res.data)
      }
      return res
    },
    async addSchemeAsync({ commit }, payload) {
      const res = await addScheme(payload)
      if (res.code === 0) {
        commit('addScheme', payload)
      }
      return res
    },
    async updateSchemeAsync({ commit }, payload) {
      const res = await updateScheme(payload)
      if (res.code === 0) {
        commit('updateScheme', payload)
      }
      return res
    },
    updateScheme({ commit }, payload) {
      commit('updateScheme', payload)
    },

    updateSchemeBySiteId({ commit }, siteId) {
      commit('updateScheme', siteId)
    },

    async deleteSchemeAsync({ commit }, payload) {
      const res = await deleteScheme({ schemeId: payload.schemeId })
      if (res.code === 0) {
        commit('DELETE_SCHEME', payload)
      }
      return res
    },
    addOperation({ commit }, payload) {
      commit('addOperation', payload)
    },
    updateOperation({ commit }, payload) {
      commit('updateOperation', payload)
    },
    deleteOperation({ commit }, payload) {
      commit('deleteOperation', payload)
    }
  }
}
export default scheme
