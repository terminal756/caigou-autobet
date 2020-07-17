const user = {
  namespaced: true,
  state: () => ({
    isLogin: window.localStorage.getItem('isLogin'),
    username: window.localStorage.getItem('username'),
    token: window.localStorage.getItem('token')
  }),

  getters: {
    isLogin: (state) => {
      if (state.isLogin != null && state.isLogin) {
        return true
      } else {
        return false
      }
    },
    getUsername: (state) => {
      if (state.isLogin != null && state.isLogin) {
        return state.username
      }
    }
  },

  mutations: {
    // 将token保存到sessionStorage里，token表示登陆状态
    SET_TOKEN: (state, token) => {
      state.token = token
      window.localStorage.setItem('token', token)
    },
    SET_USERNAME: (state, username) => {
      // 把用户名存起来
      state.username = username
      window.localStorage.setItem('username', username)
    },
    IS_LOGIN: (state, isLogin) => {
      // 把用户名存起来
      state.isLogin = isLogin
      window.localStorage.setItem('isLogin', isLogin)
    },
    // 登出
    LOGOUT: (state) => {
      // 登出的时候要清除token
      state.token = null
      state.user = null
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
    }
  },
  actions: {}
}

export default user
