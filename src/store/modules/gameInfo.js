const info = JSON.parse(localStorage.getItem('gameInfo'))
const gameInfo = {
  namespaced: true,
  state: () => ({
    gameInfo: info || []
  }),
  getters: {},
  mutations: {
    addAG(state, payload) {
      if (state.gameInfo.length) {
        const schemeIndex = state.gameInfo.findIndex((game) => game.schemeId === payload.schemeId)
        if (schemeIndex > -1) {
          state.gameInfo.splice(schemeIndex, 1)
          state.gameInfo.push(payload)
          localStorage.setItem('gameInfo', JSON.stringify(state.gameInfo))
          /* for (const ag of payload.agInfo) {
            const sameSite = state.gameInfo[schemeIndex].agInfo.find((a) => a.siteId === ag.siteId)
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
              localStorage.setItem('gameInfo', JSON.stringify(state.gameInfo))
            } else {
              state.gameInfo[schemeIndex].agInfo.push(ag)
              localStorage.setItem('gameInfo', JSON.stringify(state.gameInfo))
            }
          }*/
        } else {
          state.gameInfo.push(payload)
          localStorage.setItem('gameInfo', JSON.stringify(state.gameInfo))
        }
      } else {
        state.gameInfo.push(payload)
        localStorage.setItem('gameInfo', JSON.stringify(state.gameInfo))
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
