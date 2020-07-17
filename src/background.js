'use strict'
import path from 'path'
import { app, BrowserWindow, protocol, net, session, ipcMain, remote } from 'electron'

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : `file://${__dirname}/index.html`
const isDevelopment = process.env.NODE_ENV !== 'production'
// app.commandLine.appendSwitch('remote-debugging-port', '9222')
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function createMainWindow() {
  mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false, // 无边框
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      webviewTag: true,
      webSecurity: false
      // preload: path.resolve('src/static/preload/XMLHttpRequest.js')
    }
  })
  mainWindow.removeMenu()
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})

app.on('ready', () => {
  // 只能拦截请求头信息，无法拦截请求体
  // webRequest.onCompleted((details) => {})
  createMainWindow()
  if (isDevelopment && !process.env.IS_TEST) {
    BrowserWindow.addDevToolsExtension('D:\\dev\\project\\caigou\\caigou-electron\\src\\vue-devtools')
    mainWindow.webContents.openDevTools()
  }
  // electron debugger 远程调试协议
  // try {
  //   mainWindow.webContents.debugger.attach('1.1')
  // } catch (err) {
  //   console.log('Debugger attach failed : ', err)
  // }
  //
  // mainWindow.webContents.debugger.on('detach', (event, reason) => {
  //   console.log('Debugger detached due to : ', reason)
  // })
  //
  // mainWindow.webContents.debugger.on('message', (event, method, params) => {
  //   console.log('params:', params)
  // })
  //
  // mainWindow.webContents.debugger.sendCommand('Network.enable')
  // mainWindow.webContents.debugger.sendCommand('Page.enable')
  // mainWindow.webContents.debugger.sendCommand('Runtime.enable')
})

app.on('web-contents-created', (webContentsCreatedEvent, content) => {
  if (content.getType() === 'webview') {
    content.on('new-window', (newWindowEvent, url) => {
      content.loadURL(url)
      newWindowEvent.preventDefault()
    })
  }
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

global.scheme = {
  scheme: null
}
global.gameInfo = {
  gameInfo: null
}

ipcMain.on('remote', () => {
  const page = new BrowserWindow({ show: false })
  const url = 'http://localhost:9222/json'
  page.webContents.executeJavaScript('document.body.innerText').then((value) => {
    ipcMain.on('remote-result', (e) => {
      console.log(value)
      e.reply(value)
      // app.exit()
    })
  })
  page.loadURL(url)
})

// 中转游戏登录信息
ipcMain.on('gameInfo', (event, message) => {
  mainWindow.webContents.send('gameInfo', message)
})
