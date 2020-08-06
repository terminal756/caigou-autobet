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
    config.resolve.alias.set('@$', resolve('src')).set('@views', resolve('src/views'))
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
  assetsDir: 'static',
  runtimeCompiler: true,

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
        files: ['dist/electron/**/*'],
        win: {
          icon: './src/icon/caigou_512.ico',
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
          installerIcon: './src/icon/caigou_32.ico', // 安装图标
          installerHeaderIcon: './src/icon/caigou_512.ico',
          createDesktopShortcut: true // 创建桌面图标
          // include: 'build/script/installer.nsh'
        }
      }
    }
  }
}
