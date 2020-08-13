let win = window.require('electron').remote.getCurrentWindow()

function min() {
  win.minimize()
}

function max () {
  win.maximize()
}

function unmax () {
  win.unmaximize()
}

function ismax() {
  if (win.isMaximized()) {
    return true
  } else {
    return false
  }
}

// 设置窗口是否能改变大小，参数true/false
function setResizable(resizable) {
  win.setResizable(resizable)
}

// 下载文件
function download(url) {
  win.downloadURL(url)
}

function close() {
  win.close()
}

// 隐藏窗口
function hide() {
  win.hide()
}

// 显示窗口
function show() {
  win.show()
}

// 窗口闪烁
function flash() {
  //   if(browserWindow.isFocused() || browserWindow.isVisible())
  if (!win.isFocused()) {
    win.showInactive()
    win.flashFrame(true)
  }
}

// 设置窗口最前端显示
function setAlwaysOnTop(top) {
  win.setAlwaysOnTop(top)
}

function reload() {
  win.reload()
}

// 设置开机启动
// static enableAutoStart (callback) {
//   const key = new WinReg({ hive: WinReg.HKCU, key: RUN_LOCATION })
//   key.set('EUC', WinReg.REG_SZ, file, (err) => {
//     console.log('设置自动启动' + err)
//     callback(err)
//   })
// }

// 取消开机启动
// static disableAutoStart (callback) {
//   const key = new WinReg({ hive: WinReg.HKCU, key: RUN_LOCATION })
//   key.remove('EUC', (err) => {
//     console.log('取消自动启动' + err)
//     callback(err)
//   })
// }

// 获取是否开机启动
// static getAutoStartValue (callback) {
//   const key = new WinReg({ hive: WinReg.HKCU, key: RUN_LOCATION })
//   key.get('EUC', function (error, result) {
//     console.log('查询自动启动:' + JSON.stringify(result))
//     console.log('file:' + file)
//     if (result) {
//       callback(true)
//     } else {
//       callback(false)
//     }
//   })
// }

// 托盘图标闪烁
//   static flashTray (flash) {
//     let hasIcon = false
//     const tayIcon = './imgs/logo.ico'
//     const tayIcon1 = './imgs/empty.png'
//     if (flash) {
//       if (flashTrayTimer) {
//         return
//       }
//       flashTrayTimer = window.setInterval(() => {
//         ipcRenderer.send('ChangeTrayIcon', hasIcon ? tayIcon : tayIcon1)
//         hasIcon = !hasIcon
//       }, 500)
//     } else {
//       if (flashTrayTimer) {
//         window.clearInterval(flashTrayTimer)
//         flashTrayTimer = null
//       }
//       ipcRenderer.send('ChangeTrayIcon', tayIcon)
//     }
//   }


export { min,max,unmax,ismax,close}
