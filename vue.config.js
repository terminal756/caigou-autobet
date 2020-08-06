const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src')).set('root', resolve('./')).set('@views', resolve('src/views'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    // 运行端口号
    port: 8080,
    proxy: {
      '/ag': {
        target: 'https://gci.eastwillbe.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/ag': ''
        }
      }
    }
  },

  // electron 打包配置
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        electronDownload: {
          mirror: 'https://npm.taobao.org/mirrors/electron/'
        },
        productName: '菜狗投注',
        appId: 'com.caigoubet.autobet',
        copyright: 'Copyright © 2020', //版权信息
        directories: {
          output: './build'
        },

        publish: [
          {
            provider: 'generic',
            url: 'http://localhost:8080/'
          }
        ],
        win: {
          icon: 'build/icons/caigou_256.ico',
          target: [
            {
              target: 'nsis',
              arch: ['ia32']
            }
          ]
        },
        nsis: {
          oneClick: false, // 一键安装
          allowElevation: true, // 权限提升
          allowToChangeInstallationDirectory: true, // 运行修改安装目录
          createDesktopShortcut: true // 创建桌面图标
        }
      }
    }
  }
}
