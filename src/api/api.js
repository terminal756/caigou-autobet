import { hostConfigRequest, HttpRequest, LoginRequest, remoteRequest } from './request'

export const login = (data) => {
  return LoginRequest({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export const logout = () => {
  return HttpRequest({
    url: '/auth/logout',
    method: 'get'
  })
}

export const register = (data) => {
  return HttpRequest({
    url: '/user/register',
    method: 'post',
    data
  })
}

export const getUserByParam = (params) => {
  return HttpRequest({
    url: '/user',
    method: 'get',
    params
  })
}

export const saveGroup = (data) => {
  return HttpRequest({
    url: '/site/group',
    method: 'post',
    data
  })
}

export const getGroup = () => {
  return HttpRequest({
    url: '/site/group',
    method: 'get'
  })
}

export const updateGroup = (data) => {
  return HttpRequest({
    url: '/site/group',
    method: 'put',
    data
  })
}

export const deleteGroup = (params) => {
  return HttpRequest({
    url: '/site/group',
    method: 'delete',
    params
  })
}

export const addSite = (data) => {
  return HttpRequest({
    url: '/site',
    method: 'post',
    data
  })
}

export const getSite = () => {
  return HttpRequest({
    url: '/site',
    method: 'get'
  })
}

export const getTreeSite = () => {
  return HttpRequest({
    url: '/site/tree',
    method: 'get'
  })
}

export const updateSite = (data) => {
  return HttpRequest({
    url: '/site',
    method: 'put',
    data
  })
}

export const deleteSite = (params) => {
  return HttpRequest({
    url: '/site',
    method: 'delete',
    params
  })
}

export const getSiteListByGroupId = (groupId) => {
  return HttpRequest({
    url: '/site/' + groupId,
    method: 'get'
  })
}

export const getScheme = () => {
  return HttpRequest({
    url: '/site/scheme',
    method: 'get'
  })
}

export const addScheme = (data) => {
  return HttpRequest({
    url: '/site/scheme',
    method: 'post',
    data
  })
}

export const updateScheme = (data) => {
  return HttpRequest({
    url: '/site/scheme',
    method: 'put',
    data
  })
}

export const deleteScheme = (params) => {
  return HttpRequest({
    url: '/site/scheme',
    method: 'delete',
    params
  })
}

export function getAGHostConfig(params) {
  return hostConfigRequest({
    url: '/agingame/pcv1/resource/config/host_config.xml',
    method: 'get',
    params
  })
}
