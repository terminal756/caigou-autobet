'use strict'
const { app, BrowserWindow, protocol, ipcMain } = require('electron')
const { createProtocol } = require('vue-cli-plugin-electron-builder/lib')

const path = require('path')
const { fork } = require('child_process')
const isDev = process.env.VUE_APP_ENV === 'development'

// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
// const { autoUpdater } = require('electron-updater')
// const uploadUrl = 'http://49.234.156.23:8080/download/'

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

let win
function createMainWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false, // 无边框
    center: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  if (isDev) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // 加载vuedevtools

    // 加载子进程
    // ws = fork('../ws/app.js', [], {
    //   cwd: path.join(__dirname, '../ws')
    // })
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
    // ws = fork(require.resolve('../ws/app.js'))
  }
  win.on('close', () => {
    win = null
  })
  // win.webContents.openDevTools()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    // 结束nodejs 子进程
    // process.kill(ws.pid)
  }
})

app.on('activate', () => {
  if (win === null) {
    createMainWindow()
  }
})

app.on('ready', () => {
  createMainWindow()
  if (isDev) {
    console.log(path)
    BrowserWindow.addDevToolsExtension('D:\\tool\\vuedevtools')
    BrowserWindow.webContents.openDevTools({ detach: true })
    // try {
    //   await installExtension(VUEJS_DEVTOOLS)
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('ready')
  })
})

app.on('web-contents-created', (e, content) => {
  if (content.getType() === 'webview') {
    content.on('new-window', (newWindowEvent, url) => {
      content.loadURL(url)
      newWindowEvent.preventDefault()
    })
  }
})

if (isDev) {
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

// 中转游戏登录信息
ipcMain.on('gameInfo', (event, message) => {
  win.webContents.send('gameInfo', message)
})

// 监听renderer 关闭信息
ipcMain.on('window-close', () => {
  win.close()
})
