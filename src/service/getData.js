import request from '../utils/axios'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'login/login',
    method: 'post',
    data
  })
}
