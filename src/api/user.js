import { HttpRequest, LoginRequest } from '@/utils/request'

export function login(data) {
  return LoginRequest({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return HttpRequest({
    url: '/logout',
    method: 'get'
  })
}

export function register(data) {
  return HttpRequest({
    url: '/user/register',
    method: 'post',
    data
  })
}

export function getUser(params) {
  return HttpRequest({
    url: '/user',
    method: 'get',
    params
  })
}

export function getUserByUsername(params) {
  return HttpRequest({
    url: '/user/username',
    method: 'get',
    params
  })
}

export function active(params) {
  return HttpRequest({
    url: '/user/active',
    method: 'get',
    params
  })
}
