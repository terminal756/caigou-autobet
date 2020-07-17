const { ipcRenderer: ipc } = require('electron')

document.addEventListener('DOMContentLoaded', function (event) {
  const timer = setInterval(() => {
    const dom = document.getElementsByTagName('webview')[0]
    console.log(dom.getURL())
    dom
      .executeJavaScript('Core')
      .then((res) => {
        console.log('Core:', res)
        clearInterval(timer)
      })
      .catch((err) => console.log())
  }, 3000)
})
