import { getAGHostConfig } from '../../api/api'

const agConfig = {
  namespaced: true,
  state: () => ({
    agConfig: [],
    roomConfig: []
  }),
  getters: {},
  mutations: {
    addAG(state, payload) {
      if (state.agConfig.length) {
        for (const el of payload) {
          const res = state.agConfig.find((a) => a.port === el.port)
          if (!res) state.agConfig.push(el)
        }
      } else {
        state.agConfig.push.apply(state.agConfig, payload)
      }
    },
    addRoom(state, payload) {
      if (state.roomConfig.length) {
        for (const roomConfigElement of payload) {
          if (!state.roomConfig.includes(roomConfigElement)) state.roomConfig.push(roomConfigElement)
        }
      } else {
        state.roomConfig.push.apply(state.roomConfig, payload)
      }
    }
  },
  actions: {
    addAGConfig({ commit }, payload) {
      commit('addAG', payload)
    },
    addRoomConfig({ commit }, payload) {
      commit('addRoom', payload)
    }
  }
}
export default agConfig
