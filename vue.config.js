const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/EverFile/' : '/',
  configureWebpack: {
    plugins: [
      new CopyPlugin(
        {
          patterns: [
            {
              from: 'node_modules/@tonclient/lib-web/tonclient.wasm',
              to: './'
            }
          ],
        }
      )
    ]
  }
})
