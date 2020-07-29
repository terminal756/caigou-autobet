import * as cmd from './cmd'
import { websocket } from './websocket'

function loginPlatform(agConfig, onMsg, onBalance) {
  return new Promise((resolve) => {
    let isLogin = false
    websocket(
      agConfig.urlList[Math.floor(Math.random() * agConfig.urlList.length)] + `:${agConfig.loginPort}`,
      (ws, isConnect) => {
        ws.send(cmd.clientLogin(agConfig.loginName, agConfig.password, agConfig.isTrial).buffer)
        setTimeout(() => {
          if (!isConnect) {
            onMsg('AG平台登录超时')
            ws.close()
          }
        }, 10000)
        agConfig.currentPlatformWebSocket = ws
      },
      (ws, result) => {
        // console.log('5035：', result)
        // onMsg(JSON.stringify(result))
        switch (result.respId) {
          case 131185:
            isLogin = true
            onMsg(`登陆AG平台成功`)
            break
          // 账号密码登录返回，获取token ClientLoginResp
          case 131073:
            isLogin ? (agConfig.token = result.tokenBytes) : (onMsg('AG平台登录失败'), ws.close())
            break
          // 获取余额 ClientInfoResp
          case 131087:
            onMsg(`当前余额：${result.account}`)
            onBalance(result.account)
            break
          default:
            resolve(agConfig)
            break
        }
      },
      (ws) => {
        ws.close()
        onMsg('AG平台登录错误')
      },
      (ws) => {
        ws.close()
        onMsg('AG平台连接关闭')
      }
    )
  })
}
export { loginPlatform }
