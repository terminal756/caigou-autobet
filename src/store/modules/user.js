const users = JSON.parse(localStorage.getItem('users'))
const userId = localStorage.getItem('userId')
const username = localStorage.getItem('username')
const password = localStorage.getItem('password')
const token = localStorage.getItem('token')
const user = {
  namespaced: true,
  state: () => ({
    userId: userId || null,
    username: username || null,
    password: password || null,
    token: token || null,
    users: users || []
  }),

  getters: {
    isLogin: (state) => {
      return !!state.username && !!state.token
    },
    currentUser: (state) => {
      return state.users.find((u) => u.userId === state.userId)
    },
    isAGActive: (state) => {
      const user = state.users.find((u) => u.userId === state.userId)
      return user && user.agRecharge === 1 && user.agExpiredTime >= new Date().getTime()
    },
    isBBINActive: (state) => {
      const user = state.users.find((u) => u.userId === state.userId)
      return user && user.bbinRecharge === 1 && user.bbinExpiredTime >= new Date().getTime()
    },
    isRMActive: (state) => {
      const user = state.users.find((u) => u.userId === state.userId)
      return user && user.rmRecharge === 1 && user.rmExpiredTime >= new Date().getTime()
    }
  },

  mutations: {
    USER_ID_ADD: (state, userId) => {
      state.userId = userId
      localStorage.setItem('userId', state.userId)
    },
    ADD_USERNAME: (state, payload) => {
      state.username = payload
      localStorage.setItem('username', state.username)
    },
    ADD_PASSWORD: (state, password) => {
      state.password = password
      localStorage.setItem('password', state.password)
    },
    ADD_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('token', state.token)
    },
    LOGOUT: (state) => {
      state.userId = null
      state.username = null
      state.password = null
      state.token = null
      localStorage.removeItem('userId')
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('token')
    },
    USER_ADD: (state, user) => {
      if (state.users.length) {
        const index = state.users.findIndex((u) => u.userId === user.userId)

        if (index !== -1) {
          state.users.splice(index, 1, user)
          localStorage.setItem('users', JSON.stringify(state.users))
        } else {
          state.users.push(user)
          localStorage.setItem('users', JSON.stringify(state.users))
        }
      } else {
        state.users.push(user)
        localStorage.setItem('users', JSON.stringify(state.users))
      }
    },
    UPDATE_USER: (state, user) => {
      const index = state.users.findIndex((u) => u.userId === user.userId)
      state.users.splice(index, 1, user)
      localStorage.setItem('users', JSON.stringify(state.users))
    }
  },

  actions: {
    addUserId({ commit }, userId) {
      commit('USER_ID_ADD', userId)
    },
    addUsername({ commit }, payload) {
      commit('ADD_USERNAME', payload)
    },
    addPassword({ commit }, password) {
      commit('ADD_PASSWORD', password)
    },
    addToken({ commit }, payload) {
      commit('ADD_TOKEN', payload)
    },
    logoutActions({ commit }) {
      commit('LOGOUT')
    },
    addUser({ commit }, user) {
      commit('USER_ADD', user)
    },
    updateUser({ commit }, user) {
      commit('UPDATE_USER', user)
    }
  }
}

export default user
