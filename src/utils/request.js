import Axios from 'axios'

const qs = require('qs')
const baseUrl = process.env.VUE_APP_BASE_URL

export const HttpRequest = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

HttpRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    if (config.method === 'post' || config.method === 'put') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
HttpRequest.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const LoginRequest = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

LoginRequest.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

LoginRequest.interceptors.response.use((response) => {
  response = typeof response.data === 'string' ? JSON.parse(response.data) : response.data
  return response
})

export default { HttpRequest, LoginRequest }
