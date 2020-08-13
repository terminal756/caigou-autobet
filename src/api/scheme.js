import { HttpRequest } from '@/utils/request'

export const getScheme = () => {
  return HttpRequest({
    url: '/scheme',
    method: 'get'
  })
}

export const addScheme = (data) => {
  return HttpRequest({
    url: '/scheme',
    method: 'post',
    data
  })
}

export const updateScheme = (data) => {
  return HttpRequest({
    url: '/scheme',
    method: 'put',
    data
  })
}

export const deleteScheme = (params) => {
  return HttpRequest({
    url: '/scheme',
    method: 'delete',
    params
  })
}
