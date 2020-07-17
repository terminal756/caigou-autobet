'use strict'
const { remote } = require('electron')

// const Common = require('../common/common.js')
// const RUN_LOCATION = '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run'
// const file = process.execPath;
// const WinReg = require('winreg');
// const flashTrayTimer = null

class RendererWindowUtils {
  // 窗口最小化
  static minWindow() {
    remote.getCurrentWindow().minimize()
  }

  // 窗口最大化
  static maxWindow() {
    const browserWindow = remote.getCurrentWindow()
    if (browserWindow.isMaximized()) {
      browserWindow.unmaximize()
    } else {
      browserWindow.maximize()
    }
  }

  // 监听窗口最大化状态
  static isMaxWindow() {
    const browserWindow = remote.getCurrentWindow()
    if (browserWindow.isMaximized()) {
      return true
    } else {
      return false
    }
  }

  // 设置窗口是否能改变大小，参数true/false
  static setResizable(resizable) {
    remote.getCurrentWindow().setResizable(resizable)
  }

  // 下载文件
  static download(url) {
    remote.getCurrentWebContents().downloadURL(url)
  }

  static close() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.close()
  }

  // 隐藏窗口
  static hide() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.hide()
  }

  // 显示窗口
  static show() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.show()
  }

  // 窗口闪烁
  static flashFrame() {
    const browserWindow = remote.getCurrentWindow()
    //   if(browserWindow.isFocused() || browserWindow.isVisible())
    if (!browserWindow.isFocused()) {
      browserWindow.showInactive()
      browserWindow.flashFrame(true)
    }
  }

  // 设置窗口最前端显示
  static setAlwaysOnTop(top) {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.setAlwaysOnTop(top)
  }

  static reloadCurrentWindow() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.reload()
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

  /**
   * 托盘图标闪烁
   * @param flash true：闪烁；false：停止
   */
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
}
module.exports = RendererWindowUtils
