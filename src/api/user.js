import request from '@/utils/request'

export function login(credentials) {
  return request({
    baseURL: 'http://localhost:8080/api/',
    url: '/admin/v1/login',
    method: 'post',
    data: credentials
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
