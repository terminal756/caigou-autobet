import * as cmd from './cmd'
import { websocket } from './websocket'

import { loginPlatform } from './platform'

const plazaUrl = 'wss://cua242.vpcdn.com:5000'

async function loginPlaza() {
  const userInfo = await loginPlatform()
  return new Promise((resolve, reject) => {
    websocket(
      plazaUrl,
      (ws) => {
        ws.send(
          cmd.clientLoginPlaza(
            userInfo.loginName,
            userInfo.token,
            userInfo.isTrial
          ).buffer
        )
      },
      (ws, result) => {
        switch (result.respId) {
          // 登录大厅 LoginPlazaResp
          case 262151:
            if (result.retCode !== 0) {
              ws.close()
              reject('登录大厅失败')
            }
            break
          // 重复登录 ExceptionExitResp
          case 131142:
            if (result.nReason === 0) {
              ws.close()
              reject('重复登录')
            }
            break
          // 有效投注 UserPointResp
          case 262233:
            // 当天有效投注金额
            userInfo.dayValidBetNum = result.dayValidBetNum
            // 历史有效投注金额
            userInfo.totalBetNum = result.totalBetNum
            break
          default:
            resolve(userInfo)
            break
        }
      },
      (ws, event) => {
        reject('PLAZA 连接错误', event)
      },
      (ws, event) => {
        console.log('PLAZA 连接关闭', event)
      }
    )
  })
}

export { loginPlaza }
