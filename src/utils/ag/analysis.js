/* eslint-disable */
import { egret } from './static/egret'
import { Core } from './static/main.v1984'
import { VideoGameCore } from './static/VideoGameCore_v1983'

const assemble = function (bytes) {
  let result
  let bytearray = new egret.ByteArray()
  for (bytearray.position = bytearray.length, bytearray.writeBytes(bytes); bytearray.length >= 12; ) {
    bytearray.position = 4
    const e = bytearray.readUnsignedInt()
    const n = new egret.ByteArray(bytearray.buffer.slice(0, e))
    result = parse(n.readUnsignedInt(), n)
    bytearray.length === e ? bytearray.clear() : (bytearray = new egret.ByteArray(bytearray.buffer.slice(e)))
  }
  return result
}

const parse = (respId, bytes) => {
  bytes.position = 8
  const common = {
    respId: respId,
    seqNo: bytes.readUnsignedInt(),
    packetLength: bytes.length
  }
  if (bytes) {
    switch (respId) {
      case 1:
        return 'test'
      // 登录游戏
      // 账号密码登录返回，获取token clientResultMap.ClientLoginResp
      case 131073:
        const ClientLoginResp = {}
        ;(ClientLoginResp.code = bytes.readInt()),
          (ClientLoginResp.tokenBytes = new egret.ByteArray(bytes.buffer.slice(bytes.position, bytes.position + 16))),
          (ClientLoginResp.svrTime = Core.readInt64FromBytes(bytes)),
          (ClientLoginResp.userFlag = bytes.readInt())
        return Object.assign(common, ClientLoginResp)
      // 获取余额 ClientInfoResp
      case 131087:
        const ClientInfoResp = {}
        ;(ClientInfoResp.mobileAcountExist = bytes.readByte() !== 0),
          (ClientInfoResp.gesturePwdExist = bytes.readByte() !== 0),
          (bytes.position += 6)
        ;(ClientInfoResp.account = bytes.readDouble()),
          (ClientInfoResp.nickname = bytes.readUTFBytes(16).trim()),
          (ClientInfoResp.gender = bytes.readByte()),
          (ClientInfoResp.gameConfig = bytes.readInt())
        return Object.assign(common, ClientInfoResp)
      // 登录大厅 LoginPlazaResp
      case 262151:
        const LoginPlazaResp = {}
        ;(LoginPlazaResp.retCode = bytes.readInt()), (LoginPlazaResp.displayGuild = bytes.readUnsignedByte() === 1)
        return Object.assign(common, LoginPlazaResp)
      // 重复登录 ExceptionExitResp
      case 131142:
        const ExceptionExitResp = {}
        ExceptionExitResp.nReason = bytes.readByte()
        return Object.assign(common, ExceptionExitResp)
      // 有效投注 UserPointResp
      case 262233:
        const UserPointResp = {}
        ;(UserPointResp.retCodeInt = bytes.readInt()),
          (UserPointResp.graphIndex = bytes.readInt()),
          (UserPointResp.levelInt = bytes.readInt()),
          (UserPointResp.scoreInt = bytes.readInt()),
          (UserPointResp.dayPayoffNum = bytes.readFloat()),
          (UserPointResp.dayValidBetNum = bytes.readFloat()),
          (UserPointResp.totalBetNum = bytes.readFloat()),
          (UserPointResp.loginLongNum = bytes.readFloat())
        if (bytes.bytesAvailable > 0) {
          UserPointResp.totalBetNum = bytes.readDouble()
        }
        return Object.assign(common, UserPointResp)
      // 更新余额 VideoGameCore.UpdateBalanceResp
      case 131106:
        const UpdateBalanceResp = {}
        ;(UpdateBalanceResp.balance = bytes.readDouble()), (UpdateBalanceResp.seq = bytes.readInt())
        return Object.assign(common, UpdateBalanceResp)
      // 房间解析
      // LoginGameExtResp
      case 139266:
        const LoginGameExtResp = {}
        ;(LoginGameExtResp.retCode = bytes.readUnsignedInt()),
          (LoginGameExtResp.vid = bytes.readUTFBytes(Core._ba_)),
          (LoginGameExtResp.deviceType = bytes.readByte()),
          (LoginGameExtResp.reserve1 = bytes.readByte()),
          (LoginGameExtResp.reserve2 = bytes.readByte())
        return Object.assign(common, LoginGameExtResp)

      // 73735 VideoGameCore.AutoEnterTableVidResp
      case 73735:
        const AutoEnterTableVidResp = {}
        ;(AutoEnterTableVidResp.code = bytes.readInt()),
          (AutoEnterTableVidResp.vid = bytes.readUTFBytes(Core._ba_)),
          (AutoEnterTableVidResp.table = bytes.readUTFBytes(Core._pa_)),
          (AutoEnterTableVidResp.seat = bytes.readByte())
        return Object.assign(common, AutoEnterTableVidResp)
      // VideoGameCore.VideoStatusInfoResp
      case 131125:
        const VideoStatusInfoResp = {}
        VideoStatusInfoResp.vid = bytes.readUTFBytes(Core._ba_)
        ;(VideoStatusInfoResp.status = bytes.readByte()),
          (VideoStatusInfoResp.timeout = bytes.readShort()),
          (VideoStatusInfoResp.max_timeout = bytes.readShort()),
          (VideoStatusInfoResp.last_res = bytes.readByte())
        return Object.assign(common, VideoStatusInfoResp)
      // VideoGameCore.UserPositionResp
      // case 131092:

      // 131126 VideoGameCore.GameJettonResp
      case 131126:
        const GameJettonResp = {}
        ;(GameJettonResp.vid = bytes.readUTFBytes(Core._ba_)),
          (GameJettonResp.name = bytes.readUTFBytes(Core.__u_)),
          (GameJettonResp.nick = bytes.readUTFBytes(Core._Pu_)),
          (GameJettonResp.tableCode = bytes.readUTFBytes(Core._pa_)),
          (GameJettonResp.seatNum = bytes.readByte()),
          (GameJettonResp.playType = bytes.readUnsignedByte()),
          (GameJettonResp.value = bytes.readInt()),
          (GameJettonResp.left = bytes.readDouble()),
          (GameJettonResp.currency = bytes.readUTFBytes(Core._Zu_))
        return Object.assign(common, GameJettonResp)
      // 172086 VideoGameCore.GameJettonExtResp
      case 172086:
        const GameJettonExtResp = {}
        ;(GameJettonExtResp.vid = bytes.readUTFBytes(Core._ba_)),
          (GameJettonExtResp.name = bytes.readUTFBytes(Core.__u_)),
          (GameJettonExtResp.nick = bytes.readUTFBytes(Core._Pu_)),
          (GameJettonExtResp.tableCode = bytes.readUTFBytes(Core._pa_)),
          (GameJettonExtResp.seatNum = bytes.readByte()),
          (GameJettonExtResp.playType = bytes.readUnsignedShort()),
          (GameJettonExtResp.value = bytes.readDouble()),
          (GameJettonExtResp.left = bytes.readDouble()),
          (GameJettonExtResp.currency = bytes.readUTFBytes(Core._Zu_))
        return Object.assign(common, GameJettonExtResp)
      // 解析局号 GameStartResp
      case 131083:
        const GameStartResp = {}
        ;(GameStartResp.gmcode = bytes.readUTFBytes(Core._ga_)), (GameStartResp.span = bytes.readShort())
        return Object.assign(common, GameStartResp)
      default:
        const resp = {}
        resp.bytes = bytes
        return Object.assign(common, resp)
    }
  }
}

// 解密历史开奖结果
function parseBacBeadListResp(respId, bytes) {
  const BacBeadListResp = {}
  bytes.position = 8
  BacBeadListResp.respId = respId
  BacBeadListResp.seqNo = bytes.readUnsignedInt()
  BacBeadListResp.packetLength = bytes.length
  BacBeadListResp.vid = bytes.readUTFBytes(Core._ba_)
  BacBeadListResp.num = bytes.readInt()
  BacBeadListResp.beadList = []
  for (let i = 0; i < BacBeadListResp.num; i++) {
    const res = {}
    res.gmcode = bytes.readUTFBytes(Core._ga_)
    const j = bytes.readByte()
    const k = bytes.readByte()
    k < j ? ((res.winType = '庄'), (res.winNum = j)) : ((res.winType = j < k ? '闲' : '和'), (res.winNum = k))
    const _r_ = (bytes.readByte(), bytes.readByte())
    ;(res.redPair = (1 & _r_) === 1), (res.bluePair = (2 & _r_) >> 1 === 1), BacBeadListResp.beadList.push(res)
  }
  return BacBeadListResp
}

// 172049 BacGameResultExtResp 解密下注结果
function parseBacGameResultExtResp(respId, bytes) {
  const BacGameResultExtResp = {}
  bytes.position = 8
  BacGameResultExtResp.respId = respId
  BacGameResultExtResp.seqNo = bytes.readUnsignedInt()
  BacGameResultExtResp.packetLength = bytes.length
  BacGameResultExtResp.vid = bytes.readUTFBytes(Core._ba_)
  BacGameResultExtResp.code = bytes.readUTFBytes(Core._ga_)
  BacGameResultExtResp.bval = bytes.readByte()
  BacGameResultExtResp.pval = bytes.readByte()
  BacGameResultExtResp.bankerCardList = []
  for (let i = 0; i < 3; i++) {
    const o = bytes.readUnsignedByte()
    BacGameResultExtResp.bankerCardList.push(o)
  }
  BacGameResultExtResp.playerCardList = []
  for (let i = 0; i < 3; i++) {
    const o = bytes.readUnsignedByte()
    BacGameResultExtResp.playerCardList.push(o)
  }
  BacGameResultExtResp.overallRes = bytes.readUnsignedShort()
  return BacGameResultExtResp
}

// 176145 解密历史开奖结果
function parseBacSuperGameResultListResp(respId, bytes) {
  const BacSuperGameResultListResp = {}
  bytes.position = 8
  BacSuperGameResultListResp.respId = respId
  BacSuperGameResultListResp.seqNo = bytes.readUnsignedInt()
  BacSuperGameResultListResp.packetLength = bytes.length
  ;(BacSuperGameResultListResp.vid = bytes.readUTFBytes(4)),
    (BacSuperGameResultListResp.code = bytes.readUTFBytes(14)),
    (BacSuperGameResultListResp.bval = bytes.readByte()),
    (BacSuperGameResultListResp.pval = bytes.readByte()),
    (BacSuperGameResultListResp.bankerCardList = [])
  for (let i = 0; i < 3; i++) {
    const _o_ = bytes.readUnsignedByte()
    BacSuperGameResultListResp.bankerCardList.push(_o_)
  }
  BacSuperGameResultListResp.playerCardList = []
  for (let i = 0; i < 3; i++) {
    const _o_ = bytes.readUnsignedByte()
    BacSuperGameResultListResp.playerCardList.push(_o_)
  }
  ;(BacSuperGameResultListResp.resLen = bytes.readUnsignedByte()), (BacSuperGameResultListResp.winPlayTypes = [])
  for (let j = 0; j < BacSuperGameResultListResp.resLen; j++) {
    const _s_ = bytes.readUnsignedShort()
    BacSuperGameResultListResp.winPlayTypes.push(_s_)
  }
  return BacSuperGameResultListResp
}

function parseUserPositionResp(respId, bytes) {
  const UserPositionResp = {}
  bytes.position = 8
  UserPositionResp.respId = respId
  UserPositionResp.seqNo = bytes.readUnsignedInt()
  UserPositionResp.packetLength = bytes.length
  let _t_ = !1
  let _o_ = 1
  switch (respId) {
    // 131092
    case VideoGameCore._ti_:
      UserPositionResp.action = bytes.readByte()
      break
    // 139290
    case VideoGameCore.GAME_LAST_POSITION:
      _t_ = !0
      break
    // 131091
    case VideoGameCore.GAME_USERLIST:
      ;(UserPositionResp.action = 2), (_o_ = bytes.readInt())
      break
    // 131078
    case VideoGameCore.GAME_USERLIST_WITH_VID:
      ;(UserPositionResp.tableCode = bytes.readUTFBytes(Core._ba_)),
        (UserPositionResp.action = 2),
        (_o_ = bytes.readInt())
  }
  UserPositionResp.players = []
  for (let _i_ = 0; _i_ < _o_; _i_++) {
    const _a_ = bytes.readUTFBytes(Core.__u_)
    const _r_ = new VideoGameCore.TableSeatPlayer(_a_)
    ;(_r_.nickname = bytes.readUTFBytes(Core._Pu_)),
      (_r_.sex = bytes.readUnsignedByte()),
      _t_ && (_r_.vid = bytes.readUTFBytes(Core._ba_)),
      (_r_.tableCode = bytes.readUTFBytes(Core._pa_)),
      (_r_.seat = bytes.readByte()),
      (_r_.currency = bytes.readUTFBytes(Core._Zu_)),
      (_r_.credit = bytes.readDouble()),
      (_r_.action = UserPositionResp.action),
      UserPositionResp.players.push(_r_)
  }
  _o_ === 1 &&
    ((UserPositionResp.loginname = UserPositionResp.players[0].loginname),
    (UserPositionResp.seat = UserPositionResp.players[0].seat))
  return UserPositionResp
}

function parseGameCurrentStatusResp(respId, bytes) {
  const GameCurrentStatusResp = {}
  bytes.position = 8
  GameCurrentStatusResp.respId = respId
  GameCurrentStatusResp.seqNo = bytes.readUnsignedInt()
  GameCurrentStatusResp.packetLength = bytes.length

  GameCurrentStatusResp.vid = bytes.readUTFBytes(Core._ba_)
  GameCurrentStatusResp.gmtype = bytes.readUTFBytes(Core._Va_)
  GameCurrentStatusResp.status = bytes.readByte()
  GameCurrentStatusResp.gmcode = bytes.readUTFBytes(Core._ga_)
  if (
    (GameCurrentStatusResp.gmcode.length !== 13 && (GameCurrentStatusResp.gmcode = ''),
    [VideoGameCore.GAME_BAC, VideoGameCore.GAME_DT].indexOf(GameCurrentStatusResp.gmtype) > -1)
  ) {
    var _t_ = [VideoGameCore.GAME_DT].indexOf(GameCurrentStatusResp.gmtype) > -1 ? 1 : 3
    GameCurrentStatusResp.bcards = []
    for (var _o_ = 0; _o_ < _t_; _o_++) {
      GameCurrentStatusResp.bcards.push(bytes.readUnsignedByte())
    }
    GameCurrentStatusResp.pcards = []
    for (_o_ = 0; _o_ < _t_; _o_++) {
      GameCurrentStatusResp.pcards.push(bytes.readUnsignedByte())
    }
    if (GameCurrentStatusResp.gmtype === VideoGameCore.GAME_BAC) {
      ;(GameCurrentStatusResp.pcards = revertCard(GameCurrentStatusResp.pcards))(
        (GameCurrentStatusResp.bcards = revertCard(GameCurrentStatusResp.bcards))
      )
    }
  } else if ([VideoGameCore.GAME_NN].indexOf(GameCurrentStatusResp.gmtype) > -1) {
    GameCurrentStatusResp.cardlist = []
    for (_o_ = 0; _o_ < 21; _o_++) {
      GameCurrentStatusResp.cardlist.push(bytes.readUnsignedByte())
    }
    _t_ = (bytes.readUnsignedInt(), bytes.readByte())
    bytes.readByte()
  } else {
    ;[VideoGameCore.GAME_ROU].indexOf(GameCurrentStatusResp.gmtype) > -1
      ? (GameCurrentStatusResp.res = bytes.readUnsignedInt())
      : [VideoGameCore.GAME_SHB].indexOf(GameCurrentStatusResp.gmtype) > -1 &&
        ((GameCurrentStatusResp.shbInfo = new VideoGameCore.RoadPaper.RoadShbData()),
        (GameCurrentStatusResp.shbInfo.code = GameCurrentStatusResp.gmcode),
        (GameCurrentStatusResp.shbInfo.dice1 = bytes.readByte()),
        (GameCurrentStatusResp.shbInfo.dice2 = bytes.readByte()),
        (GameCurrentStatusResp.shbInfo.dice3 = bytes.readByte()))
  }
  ;(GameCurrentStatusResp.timeout = bytes.readShort()), (GameCurrentStatusResp.max_timeout = bytes.readShort())
  return GameCurrentStatusResp
}

function revertCard(_e_) {
  const _t_ = _e_[1]
  return (_e_[1] = _e_[0]), (_e_[0] = _t_), _e_
}

export {
  assemble,
  parseBacBeadListResp,
  parseBacGameResultExtResp,
  parseBacSuperGameResultListResp,
  parseUserPositionResp,
  parseGameCurrentStatusResp
}
