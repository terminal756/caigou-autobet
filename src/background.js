'use strict'
import { app, BrowserWindow, protocol, ipcMain } from 'electron'

const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
const winURL = process.env.VUE_APP_ENV === 'development' ? 'http://localhost:8080' : `file://${__dirname}/index.html`
const isDevelopment = process.env.VUE_APP_ENV !== 'production'
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

let mainWindow
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
      webSecurity: false,
      enableRemoteModule: true
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

app.on('ready', async () => {
  createMainWindow()
  if (isDevelopment && !process.env.IS_TEST) {
    await installExtension(VUEJS_DEVTOOLS)
    mainWindow.webContents.openDevTools()
  }
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
