import * as cmd from './cmd'
import { assemble } from './analysis'
import { egret } from './static/egret'

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
    if (ws.readyState !== ws.CLOSED || ws.readyState !== ws.CLOSING) {
      sendHeartbeat()
    }
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
  ws.onerror = () => {
    onError(ws)
    clearInterval(heartbeat)
  }
  ws.onclose = () => {
    onClose(ws)
    clearInterval(heartbeat)
  }
}
