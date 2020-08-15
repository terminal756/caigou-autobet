import { HttpRequest } from '@/utils/request'

export const getAgConfig = () => {
  return HttpRequest({
    url: '/ag',
    method: 'get'
  })
}
