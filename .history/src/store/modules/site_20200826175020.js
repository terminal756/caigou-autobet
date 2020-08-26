import { addSite, deleteSite, getSite, updateSite } from '@/api/site'
const site = {
  namespaced: true,
  state: () => ({
    siteList: []
  }),
  getters: {
    getSiteWithoutGroup: (state) => {
      return state.siteList.filter((s) => s.groupId === null)
    },
    getSiteByGroupId: (state) => (groupId) => {
      const result = []
      for (let i = 0; i < state.siteList.length; i++) {
        const site = state.siteList[i]
        if (site.groupId === groupId) {
          result.push(site)
        }
      }
      return result
    }
  },
  mutations: {
    pushSite(state, payload) {
      state.siteList.push(payload)
    },
    getSite(state, payload) {
      state.siteList = payload || []
    },
    updateSite(state, payload) {
      state.siteList.splice(payload.index, 1, payload.site)
    },
    SITE_DELETE(state, payload) {
      state.siteList.splice(payload.index, 1)
    }
  },
  actions: {
    async addSiteAsync({ commit }, site) {
      const res = await addSite(site)
      if (res.code === 0) {
        commit('pushSite', res.data)
      }
      return res
    },
    async getSiteAsync({ commit }) {
      const res = await getSite()
      if (res.code === 0) {
        commit('getSite', res.data)
      }
    },
    async updateSiteAsync({ commit }, payload) {
      const res = await updateSite(payload.site)
      if (res.code === 0) {
        commit('updateSite', payload)
      }
      return res
    },
    async deleteSiteAsync({ commit }, payload) {
      const res = await deleteSite({ siteId: payload.siteId })
      if (res.code === 0) {
        commit('SITE_DELETE', payload)
      }
      return res
    }
  }
}
export default site
