const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },

  // 路径别名配置
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src')).set('~', resolve('./')).set('@views', resolve('src/views'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
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
        productName: 'caigoubet',
        appId: 'com.caigoubet.autobet',
        copyright: 'Copyright © 2020', //版权信息
        files: ['./**/*'],
        directories: {
          output: './build'
        },

        // 自动更新配置
        publish: [
          {
            provider: 'generic',
            url: 'http://49.234.156.23:8080/download/' // 安装资源地址
          }
        ],
        win: {
          icon: 'build/icons/caigou_256.ico',
          artifactName: '${productName}_${version}.${ext}', // 应用程序包名
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
          createDesktopShortcut: true, // 创建桌面快捷方式
          installerIcon: 'build/icons/caigou_256.ico', // 安装的图标
          uninstallerIcon: 'build/icons/caigou_256.ico' // 卸载图标
        }
      }
    }
  }
}
