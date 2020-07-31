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
  runtimeCompiler: true
}
