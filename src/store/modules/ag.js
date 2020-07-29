const config = JSON.parse(localStorage.getItem('config'))
const room = JSON.parse(localStorage.getItem('room'))
const ag = {
  namespaced: true,

  state: () => ({
    config: config || [],
    room: room || [],
    webSocketLog: []
  }),
  getters: {
    currentWebSocketLog: (state) => (schemeId) => {
      return state.webSocketLog.filter((l) => {
        return l.schemeId === schemeId
      })
    }
  },
  mutations: {
    addConfig(state, payload) {
      if (state.config.length) {
        for (const el of payload) {
          const res = state.config.find((a) => a.port === el.port)
          if (!res) {
            state.config.push(el)
            localStorage.setItem('config', JSON.stringify(state.config))
          }
        }
      } else {
        state.config.push.apply(state.config, payload)
        localStorage.setItem('config', JSON.stringify(state.config))
      }
    },
    addRoom(state, payload) {
      if (state.room.length) {
        for (const room of payload) {
          if (!state.room.includes(room)) {
            state.room.push(room)
            localStorage.setItem('room', JSON.stringify(state.room))
          }
        }
      } else {
        state.room.push.apply(state.room, payload)
        localStorage.setItem('room', JSON.stringify(state.room))
      }
    },
    addLog(state, payload) {
      state.webSocketLog.unshift(payload)
    },
    deleteLog(state, payload) {
      state.webSocketLog = state.webSocketLog.filter((l) => {
        return l.schemeId !== payload
      })
    }
  },
  actions: {
    addConfig({ commit }, payload) {
      commit('addConfig', payload)
    },
    addRoom({ commit }, payload) {
      commit('addRoom', payload)
    },
    addWebSocketLog({ commit }, payload) {
      commit('addLog', payload)
    },
    deleteWebSocketLog({ commit }, payload) {
      commit('deleteLog', payload)
    }
  }
}
export default ag
