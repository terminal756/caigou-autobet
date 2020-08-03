import Axios from 'axios'
import qs from 'qs'
import xml2js from 'xml2js'

const xmlParser = new xml2js.Parser()

let baseUrl = ''
switch (process.env.VUE_APP_ENV) {
  case 'development':
    baseUrl = 'http://localhost:8888/' // 开发环境url
    break
  case 'production':
    baseUrl = 'http://localhost:8888/' // 生产环境url
    break
}

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

export const hostConfigRequest = Axios.create({
  baseURL: '/ag'
})

hostConfigRequest.interceptors.response.use((response) => {
  let res
  if (response.status === 200) {
    xmlParser.parseString(response.data, (err, result) => {
      res = result
    })
    return res
  } else {
    console.log('AG host_config 数据获取错误')
  }
})

export default { HttpRequest, LoginRequest, hostConfigRequest }
