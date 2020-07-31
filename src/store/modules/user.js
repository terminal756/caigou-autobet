const username = window.localStorage.getItem('username')
const token = window.localStorage.getItem('token')
const user = {
  namespaced: true,
  state: () => ({
    username: username || null,
    token: token || null
  }),

  getters: {
    isLogin: (state) => {
      return state.username && state.token
    }
  },

  mutations: {
    addUsername: (state, payload) => {
      state.username = payload
      window.localStorage.setItem('username', state.username)
    },
    addToken: (state, payload) => {
      state.token = payload
      window.localStorage.setItem('token', state.token)
    },
    logout: (state) => {
      state.username = null
      state.token = null
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('token')
    }
  },

  actions: {
    addUsername({ commit }, payload) {
      commit('addUsername', payload)
    },
    addToken({ commit }, payload) {
      commit('addToken', payload)
    },
    logoutActions({ commit }) {
      commit('logout')
    }
  }
}

export default user
