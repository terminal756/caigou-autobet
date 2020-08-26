import * as cmd from './cmd'
import * as analysis from './analysis'
import { loginPlaza } from './plaza'
import { websocket } from './websocket'
import { egret } from './static/egret'
import { Core } from './static/main.v1984'
import { doSend, handleCryptoPacket } from './static/Cube-Socket-Live.v1943'

async function loginRoom(agConfig, onMsg, onBalance, onBet, onUserEncryptKey, onUserDecryptKey, onBroadcastDecryptKey) {
  const socketId = Date.now() % 2147483647
  let broadcastDecryptKey = 0
  let userDecryptKey = 0
  let userEncryptKey = 0

  const plazaResult = await loginPlaza(agConfig, onMsg, onBalance)
  const tableBuffer = cmd.clientLoginGameExt(
    agConfig.vid,
    agConfig.loginName,
    plazaResult.token,
    Core._ka_,
    agConfig.isTrial,
    agConfig.version_seq
  ).buffer
  return new Promise((resolve) => {
    agConfig.socketId = socketId
    websocket(
      agConfig.urlList[Math.floor(Math.random() * agConfig.urlList.length)] + `:${agConfig.roomPort}`,
      (ws) => {
        ws.send(tableBuffer)
        userEncryptKey = new egret.ByteArray(tableBuffer.slice(49, 53)).readUnsignedInt()
        agConfig.currentRoomWebSocket = ws
      },
      (ws, result) => {
        // console.log('房间：', result)
        switch (result.respId) {
          case 301825: {
            // console.log('301825 解包参数', result, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey)
            const res = handleCryptoPacket(result, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey)
            if (res.data) {
              ws.send(res.data.buffer)
            }
            if (res.userEncryptKey) {
              userEncryptKey = res.userEncryptKey
              onUserEncryptKey(userEncryptKey)
            }
            if (res.userDecryptKey) {
              userDecryptKey = res.userDecryptKey
              onUserDecryptKey(userDecryptKey)
            }
            break
          }

          // LoginGameExtResp
          case 139266:
            if (result.retCode === 0) {
              ws.send(cmd.autoEnterTable(agConfig.vid, agConfig.version_seq).buffer)
              onMsg(`进入房间${agConfig.vid}成功`)
              resolve(agConfig)
            } else {
              if (result.retCode === 78) {
                onMsg(`进入房间${agConfig.vid}失败`)
              }
              if (result.retCode === 8) {
                // 8 === _o_.retCode && this.renewLoginToken());
                onMsg(`房间:${agConfig.vid},刷新token`)
              }
            }
            break
          case 301569: {
            const res = handleCryptoPacket(result, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey)
            if (res.broadcastDecryptKey) {
              broadcastDecryptKey = res.broadcastDecryptKey
              onBroadcastDecryptKey(broadcastDecryptKey)
            }
            break
          }
          // $decrypt broadcastDecryptKey
          case 301584: {
            const res = handleCryptoPacket(result, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey)
            switch (res.data.respId) {
              case 368642:
                // onMsg(`房间：${agConfig.vid}————房间状态：发牌中`)
                break
              // 解析下注结果
              case 172049: {
                const gameResult = analysis.parseBacGameResultExtResp(res.data.respId, res.data.bytes)
                // onMsg(`开奖房间：${agConfig.vid}————开奖结果：{庄：${gameResult.bval}，闲：${gameResult.pval}}`)
                // console.log('解析下注结果 gameResult:', gameResult)
                break
              }
              // 解析下注结果
              case 176145: {
                const superGameResult = analysis.parseBacSuperGameResultListResp(res.data.respId, res.data.bytes)
                let winType
                if (superGameResult.winPlayTypes[0] === 1) {
                  winType = '庄赢'
                } else if (superGameResult.winPlayTypes[0] === 2) {
                  winType = '闲赢'
                } else {
                  winType = '和'
                }
                onMsg(
                  `房间：${agConfig.vid}——开奖结果：{庄：${superGameResult.bval}，闲：${superGameResult.pval}，${winType}}`
                )
                break
              }
            }
            break
          }

          case 301840: {
            const res = handleCryptoPacket(result, socketId, userEncryptKey, userDecryptKey, broadcastDecryptKey)
            switch (res.data.respId) {
              // 历史开奖数据
              case 131080: {
                const BacBeadListResp = analysis.parseBacBeadListResp(res.data.respId, res.data.bytes)
                // onMsg(`房间:${agConfig.vid}————历史开奖数据:${JSON.stringify(BacBeadListResp)}`)
                // console.log('BacBeadListResp:', BacBeadListResp)
                break
              }
              case 131094: {
                const gameCurrentStatus = analysis.parseGameCurrentStatusResp(res.data.respId, res.data.bytes)
                // onMsg(`房间:${agConfig.vid}————当前游戏状态：${JSON.stringify(gameCurrentStatus)}`)
                // console.log('gameCurrentStatus:', gameCurrentStatus)
                onBet(result.gmcode)
                break
              }
            }
            break
          }
          // GameStartResp
          case 131083: {
            let lastSeqTime = 0
            const currentTime = new Date().getTime()
            if (currentTime - lastSeqTime > 15e3) {
              lastSeqTime = currentTime
              // console.log('keepSeq', new Date())
              ws.send(cmd.keepSeq(result.seqNo).buffer)
            }
            onBet(result.gmcode)
            break
          }

          // 玩家数据
          case 131078 || 131091 || 131092 || 139290: {
            const res = analysis.parseUserPositionResp(result.respId, result.bytes)
            // console.log(`USERPOSITIONRESP ${result.respId}: `, res)
            break
          }
          // 当前余额
          case 131106:
            onMsg(`当前余额：${result.balance}`)
            onBalance(result.balance)
            break
          // VideoStatusInfoResp
          case 131125:
            switch (result.status) {
              case 1:
                onMsg(`房间：${agConfig.vid}——状态：下注中`)
                // console.log('131125 VideoStatusInfoResp:', result)
                break
              case 11:
                onMsg(`房间：${agConfig.vid}——状态：洗牌中`)
                break
            }
            break
          case 73735:
            // console.log('cmd.getGameCurrentStatus()')
            ws.send(cmd.getGameCurrentStatus().buffer)
            break
          default:
            break
        }
      },
      (ws) => {
        ws.close()
        onMsg(`房间：${agConfig.vid}——连接错误`)
      },
      (ws) => {
        ws.close()
        onMsg(`房间：${agConfig.vid}——连接关闭`)
      }
    )
  })
}
export { loginRoom }
