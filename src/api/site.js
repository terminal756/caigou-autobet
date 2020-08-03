import { HttpRequest } from '../utils/request'

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
