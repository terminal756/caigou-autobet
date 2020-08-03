import {HttpRequest} from '../utils/request'

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
