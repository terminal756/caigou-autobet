import * as cmd from './cmd'
import { websocket } from './websocket'

const loginUrl = 'wss://cua242.vpcdn.com:5035'

const userInfo = {
  // 真实账号
  // isTrial: false,
  // loginName: 'F55yyagary2910',
  // password: '3c099cb7ef4f1917d978812077f1b98a',

  // 试玩账号
  isTrial: true,
  loginName: 'F55wwntest9732422',
  password: '0d092657906a18a085298f7990f57fbe'
}

function loginPlatform() {
  return new Promise((resolve, reject) => {
    let isLogin = false

    websocket(
      loginUrl,
      (ws, isConnect) => {
        ws.send(cmd.clientLogin(userInfo.loginName, userInfo.password, userInfo.isTrial).buffer)
        setTimeout(() => {
          if (!isConnect) {
            ws.close()
            reject('登录超时')
          }
        }, 10000)
      },
      (ws, result) => {
        switch (result.respId) {
          case 131185:
            isLogin = true
            break
          // 账号密码登录返回，获取token ClientLoginResp
          case 131073:
            isLogin ? (userInfo.token = result.tokenBytes) : (ws.close(), reject('登录失败'))
            break
          // 获取余额 ClientInfoResp
          case 131087:
            userInfo.balance = result.account
            break
          default:
            resolve(userInfo)
            break
        }
      },
      (ws, event) => {
        reject('PLATFORM 连接错误', event)
      },
      (ws, event) => {
        console.log('PLATFORM 连接关闭', event)
      }
    )
  })
}
export { loginPlatform }
