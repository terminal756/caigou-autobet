import * as cmd from './cmd'
import { egret } from '../agingame/egret'
import { assemble } from './analysis'

export function websocket(url, onConnect, onMessage, onError, onClose) {
  const ws = new WebSocket(url)
  ws.binaryType = 'arraybuffer'

  let isConnect = false
  let heartbeat

  function sendHeartbeat() {
    heartbeat = setInterval(() => {
      ws.send(cmd.keepAlive().buffer)
      ws.send(cmd.UCGateAlive().buffer)
    }, 10000)
  }

  ws.onopen = () => {
    sendHeartbeat()
  }

  ws.onmessage = (event) => {
    const result = assemble(new egret.ByteArray(event.data))
    if (result && result.respId === 8781826) {
      if (!isConnect) {
        isConnect = true
        if (onConnect !== undefined) onConnect(ws, isConnect)
      }
    } else {
      if (isConnect) onMessage(ws, result)
    }
  }

  ws.onerror = (event) => {
    onError(ws, event)
    clearInterval(heartbeat)
  }

  ws.onclose = (event) => {
    onClose(ws, event)
    clearInterval(heartbeat)
  }
}
