import { loginByUsername } from '@/service/getData'

export default {
  // 用户登录
  LoginByUsername ({commit}, userInfo) {
    const username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      loginByUsername(username, userInfo.password).then((res) => {
        console.log(res)
      })
    })
  }
}
