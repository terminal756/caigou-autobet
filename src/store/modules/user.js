const users = JSON.parse(localStorage.getItem('users'))
const username = localStorage.getItem('username')
const token = localStorage.getItem('token')
const user = {
  namespaced: true,
  state: () => ({
    username: username || null,
    token: token || null,
    users: users || []
  }),

  getters: {
    isLogin: (state) => {
      return state.username && state.token
    },
    isAGActive: (state) => {
      const user = state.users.find((u) => u.username === state.username)
      return !!user && user.agRecharge === 1 && !!user.agExpiredTime
    },
    isBBINActive: (state) => {
      const user = state.users.find((u) => u.username === state.username)
      return !!user && user.bbinRecharge === 1 && !!user.bbinExpiredTime
    },
    isRMActive: (state) => {
      const user = state.users.find((u) => u.username === state.username)
      return !!user && user.rmRecharge === 1 && !!user.rmExpiredTime
    }
  },

  mutations: {
    ADD_USERNAME: (state, payload) => {
      state.username = payload
      localStorage.setItem('username', state.username)
    },
    ADD_TOKEN: (state, payload) => {
      state.token = payload
      localStorage.setItem('token', state.token)
    },
    LOGOUT: (state) => {
      state.username = null
      state.token = null
      localStorage.removeItem('username')
      localStorage.removeItem('token')
    },
    ADD_USER: (state, user) => {
      if (state.users.length) {
        const i = state.users.findIndex(u => u.userId === user.userId)
        if (i !== -1) {
          state.users.splice(i, 1, user)
          localStorage.setItem('users', JSON.stringify(state.users))
        } else {
          state.users.push(user)
          localStorage.setItem('users', JSON.stringify(state.users))
        }
      } else {
        state.users.push(user)
        localStorage.setItem('users', JSON.stringify(state.users))
      }
    }
  },

  actions: {
    addUsername({ commit }, payload) {
      commit('ADD_USERNAME', payload)
    },
    addToken({ commit }, payload) {
      commit('ADD_TOKEN', payload)
    },
    logoutActions({ commit }) {
      commit('LOGOUT')
    },
    addUser({ commit }, user) {
      commit('ADD_USER', user)
    }
  }
}

export default user
