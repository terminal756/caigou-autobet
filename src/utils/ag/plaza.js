import * as cmd from './cmd'
import { websocket } from './websocket'
import { loginPlatform } from './platform'

async function loginPlaza(agConfig, onMsg, onBalance) {
  const platformResult = await loginPlatform(agConfig, onMsg, onBalance)
  return new Promise((resolve) => {
    websocket(
      agConfig.urlList[Math.floor(Math.random() * agConfig.urlList.length)] + `:${agConfig.plazaPort}`,
      (ws) => {
        ws.send(cmd.clientLoginPlaza(agConfig.loginName, platformResult.token, agConfig.isTrial).buffer)
        agConfig.currentPlazaWebSocket = ws
      },
      (ws, result) => {
        // console.log('5000:', result)
        // onMsg(JSON.stringify(result))
        switch (result.respId) {
          // 登录大厅 LoginPlazaResp
          case 262151:
            if (result.retCode !== 0) {
              ws.close()
              onMsg(`大厅登录失败`)
            }
            break
          // 重复登录 ExceptionExitResp
          case 131142:
            if (result.nReason === 0) {
              ws.close()
              onMsg(`大厅重复登录`)
            }
            break
          // 有效投注 UserPointResp
          case 262233:
            // 当天有效投注金额
            // agConfig.dayValidBetNum = result.dayValidBetNum
            onMsg(`当天有效投注金额：${result.dayValidBetNum}`)
            // 历史有效投注金额
            // agConfig.totalBetNum = result.totalBetNum
            onMsg(`历史有效投注金额：${result.totalBetNum}`)
            break
          default:
            resolve(agConfig)
            break
        }
      },
      (ws) => {
        ws.close()
        onMsg(`大厅连接错误`)
      },
      (ws) => {
        ws.close()
        onMsg(`大厅连接关闭`)
      }
    )
  })
}

export { loginPlaza }
