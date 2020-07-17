import * as cmd from './cmd'
import * as analysis from './analysis'
import { egret } from '../agingame/egret'
import { Core } from '../agingame/main.v1983'
import { loginPlaza } from './plaza'
import { websocket } from './websocket'
import { doSend, handleCryptoPacket } from '../agingame/Cube-Socket-Live.v1943'

const roomUrl = 'wss://cua242.vpcdn.com:5241'

let socketId = Date.now() % 2147483647,
  broadcastDecryptKey = 0,
  userDecryptKey = 0,
  userEncryptKey = 0

async function loginTable() {
  const userInfo = await loginPlaza()
  const vid = 'N001'
  const version_seq = 1983
  const tableBuffer = cmd.clientLoginGameExt(
    vid,
    userInfo.loginName,
    userInfo.token,
    Core._ka_,
    userInfo.isTrial,
    version_seq
  ).buffer

  let res, heartbeat

  websocket(
    roomUrl,
    (ws) => {
      ws.send(tableBuffer)
      userEncryptKey = new egret.ByteArray(
        tableBuffer.slice(49, 53)
      ).readUnsignedInt()
    },
    (ws, result) => {
      console.log('onMessage:', result)
      switch (result.respId) {
        case 301825:
          res = handleCryptoPacket(
            result,
            socketId,
            userEncryptKey,
            userDecryptKey,
            broadcastDecryptKey
          )
          if (res.data) ws.send(res.data.buffer)
          if (res.userEncryptKey) userEncryptKey = res.userEncryptKey
          if (res.userDecryptKey) userDecryptKey = res.userDecryptKey
          break
        // LoginGameExtResp
        case 139266:
          if (result.retCode === 0) {
            ws.send(cmd.autoEnterTable(vid, version_seq).buffer)
          } else {
            if (result.retCode === 78) {
              console.log('====139266 进入游戏失败====')
              ws.close()
            }
            if (result.retCode === 8) {
              //8 === _o_.retCode && this.renewLoginToken());
              console.log('====renewLoginToken====')
            }
          }
          break
        case 301569:
          res = handleCryptoPacket(
            result,
            socketId,
            userEncryptKey,
            userDecryptKey,
            broadcastDecryptKey
          )
          if (res.broadcastDecryptKey)
            broadcastDecryptKey = res.broadcastDecryptKey
          // console.log('获取广播密钥 broadcastDecryptKey', broadcastDecryptKey)
          break
        // $decrypt broadcastDecryptKey
        case 301584:
          res = handleCryptoPacket(
            result,
            socketId,
            userEncryptKey,
            userDecryptKey,
            broadcastDecryptKey
          )
          switch (res.data.respId) {
            case 368642:
              console.log('====发牌中====')
              break
            // 解析下注结果
            case 172049:
              const gameResult = analysis.parseBacGameResultExtResp(
                res.data.respId,
                res.data.bytes
              )
              console.log('172049 解析下注结果:', gameResult)
              break
            // 解析下注结果
            case 176145:
              // const superGameResult = analysis.parseBacSuperGameResultListResp(
              //   res.data.respId,
              //   res.data.bytes
              // )
              // console.log('176145 解析下注结果:', superGameResult)
              break
          }
          console.log('301584 data:', res.data)
          break
        case 301840:
          res = handleCryptoPacket(
            result,
            socketId,
            userEncryptKey,
            userDecryptKey,
            broadcastDecryptKey
          )
          console.log('301840 data:', res.data)
          switch (res.data.respId) {
            // 历史开奖数据
            case 131080:
              const BacBeadListResp = analysis.parseBacBeadListResp(
                res.data.respId,
                res.data.bytes
              )
              console.log('历史开奖数据 131080:', BacBeadListResp)
              break
            case 131094:
              const gameCurrentStatus = analysis.parseGameCurrentStatusResp(
                res.data.respId,
                res.data.bytes
              )
              console.log('当前游戏状态 131094:', gameCurrentStatus)
              break
          }
          break
        // GameStartResp
        case 131083:
          console.log('解析局号：', result.gmcode)
          // playType：1，庄；2，闲；3，和
          ws.send(
            doSend(
              cmd.gameBetExt(result.gmcode, 2, 100),
              socketId,
              userEncryptKey,
              userDecryptKey,
              broadcastDecryptKey
            ).buffer
          )
          let lastSeqTime = 0,
            currentTime = new Date().getTime()
          if (15e3 < currentTime - lastSeqTime && ws.readyState === 1) {
            lastSeqTime = currentTime
            // console.log('发送应答包 131083 keepSeq')
            ws.send(cmd.keepSeq(result.seqNo).buffer)
          }

          break
        case 131078 || 131091 || 131092 || 139290:
          res = analysis.parseUserPositionResp(result.respId, result.bytes)
          console.log(`USERPOSITIONRESP ${result.respId}: `, res)
          break
        // 当前余额
        case 131106:
          console.log('当前余额：', result.balance)
          break
        // VideoStatusInfoResp
        case 131125:
          switch (result.status) {
            case 1:
              console.log('====下注中====')
              break
            case 11:
              console.log('====洗牌中====')
              break
          }
          break
        case 73735:
          ws.send(cmd.getGameCurrentStatus().buffer)
          break
        default:
          break
      }
    },
    (ws, event) => {
      console.log('TABLE 连接错误', event)
      clearInterval(heartbeat)
    },
    (ws, event) => {
      console.log('TABLE 连接关闭', event)
      clearInterval(heartbeat)
    }
  )
}
export { loginTable }
