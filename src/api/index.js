import request from '@/utils/request'

export function getAntique(params) {
  return request({
    url: '/museum-antique/api/index/selected-antique',
    method: 'get',
    params
  })
}

export function getMuseumList(params) {
  return request({
    url: '/museum-antique/api/index/museum-list',
    method: 'get',
    params
  })
}

export function getTheme(params) {
  return request({
    url: '/index/selected-theme',
    method: 'get',
    params
  })
}
