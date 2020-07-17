import { egret } from '../agingame/egret'
import { Core } from '../agingame/main.v1983'
import { VideoGameCore } from '../agingame/VideoGameCore_v1983'

function keepAlive() {
  return Core.getSimpleCMD(Core.Protocol.KEEP_ALIVE)
}
function UCGateAlive() {
  return Core.getSimpleCMD(Core.Protocol.UCGATE_ALIVE)
}
function clientLogin(loginName, password, isTrial) {
  let _n_, _r_
  ;(_r_ = isTrial
    ? Core.Protocol.CLIENT_LOGIN_TRIAL
    : Core.Protocol.CLIENT_LOGIN),
    (_n_ = Core.startCMD(_r_)).writeBytes(
      Core.stringToBytes(loginName, Core.__u_)
    )
  let _o_ = Core.hexStrToBytes(password)
  return _n_.writeBytes(_o_), _n_.writeInt(0), Core.endCMD(_n_)
}
function clientLoginPlaza(loginName, token, isTrial) {
  let _o_
  _o_ = isTrial
    ? VideoGameCore.CLIENT_LOGIN_PLAZA_TRIAL
    : VideoGameCore.CLIENT_LOGIN_PLAZA
  const _i_ = Core.startCMD(_o_)
  return (
    _i_.writeBytes(Core.stringToBytes(loginName, Core.__u_)),
    _i_.writeBytes(token),
    Core.endCMD(_i_)
  )
}
function clientLoginGameExt(vid, loginName, token, ka, isTrial, version_seq) {
  void 0 === ka && (ka = Core._ka_)
  const _a_ = Core.startCMD(
    isTrial
      ? VideoGameCore.CLIENT_LOGIN_GAME_EXT_TRIAL
      : VideoGameCore.CLIENT_LOGIN_GAME_EXT,
    version_seq
  )
  return (
    _a_.writeBytes(Core.stringToBytes(vid, Core._ba_)),
    _a_.writeBytes(Core.stringToBytes(loginName, Core.__u_)),
    _a_.writeByte(5),
    _a_.writeByte(0),
    _a_.writeByte(0),
    _a_.writeBytes(token),
    Core.endCMD(_a_)
  )
}
function autoEnterTable(vid, version_seq) {
  const _o_ = Core.startCMD(VideoGameCore.AUTO_ENTER_TABLE, version_seq)
  return _o_.writeBytes(Core.stringToBytes(vid, Core._ba_)), Core.endCMD(_o_)
}
function keepSeq(param) {
  let byteArray = new egret.ByteArray()
  return (
    byteArray.writeInt(Core.Protocol.KEEP_ALIVE),
    byteArray.writeInt(Core._Ic_),
    byteArray.writeInt(param),
    byteArray
  )
}
function getGameCurrentStatus() {
  return Core.getSimpleCMD(VideoGameCore.GET_GAME_CURRENT_STATUS)
}
function gameBetExt(gmcode, playType, amount) {
  Core.addSequence()
  Core.addSequence()
  const _r_ = Core.startBetCMD(
    VideoGameCore.GAME_BET_EXT,
    Core.getSequence(),
    playType
  )
  console.log('seq:', Core.getSequence())
  return (
    _r_.writeBytes(Core.stringToBytes(gmcode, Core._ga_)),
    _r_.writeShort(playType),
    _r_.writeUnsignedInt(amount),
    _r_.writeUnsignedInt(1),
    Core.endCMD(_r_)
  )
}

export {
  keepAlive,
  UCGateAlive,
  clientLogin,
  clientLoginPlaza,
  clientLoginGameExt,
  autoEnterTable,
  keepSeq,
  getGameCurrentStatus,
  gameBetExt,
}
