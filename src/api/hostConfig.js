import { hostConfigRequest } from '@/utils/request'

export function getAGHostConfig(params) {
  return hostConfigRequest({
    url: '/agingame/pcv1/resource/config/host_config.xml',
    method: 'get',
    params
  })
}
