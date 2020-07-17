const gameInfo = {
  namespaced: true,
  state: () => ({
    info: []
  }),
  getters: {},
  mutations: {
    addAG(state, payload) {
      if (state.info.length) {
        const schemeIndex = state.info.findIndex((game) => game.schemeId === payload.schemeId)
        if (schemeIndex > -1) {
          for (const ag of payload.agInfo) {
            const sameSite = state.info[schemeIndex].agInfo.find((a) => a.siteId === ag.siteId)
            if (sameSite) {
              if (sameSite.loginName !== ag.loginName) {
                sameSite.loginName = ag.loginName
              }
              if (sameSite.password !== ag.password) {
                sameSite.password = ag.password
              }
              if (sameSite.isTrial !== ag.isTrial) {
                sameSite.isTrial = ag.isTrial
              }
              if (sameSite.urlList !== ag.urlList) {
                sameSite.urlList = ag.urlList
              }
            } else {
              state.info[schemeIndex].agInfo.push(ag)
            }
          }
        } else {
          state.info.push(payload)
        }
      } else {
        state.info.push(payload)
      }
    }
  },
  actions: {
    addAGInfo({ commit }, payload) {
      commit('addAG', payload)
    }
  }
}
export default gameInfo
