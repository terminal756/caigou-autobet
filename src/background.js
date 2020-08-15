'use strict'
import { app, BrowserWindow, protocol, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

const isDev = process.env.VUE_APP_ENV === 'development'

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

let win
async function createMainWindow() {
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
    win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }
  win.on('close', () => {
    win = null
  })
  win.webContents.openDevTools()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createMainWindow()
  }
})

app.on('ready', async () => {
  if (isDev && !process.env.IS_TEST) {
    // try {
    //   await installExtension(VUEJS_DEVTOOLS)
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createMainWindow()
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
