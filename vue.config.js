// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // 选项
  publicPath: process.env.NODE_ENV === 'production'
    ? '/web-device-debbuger/'
    : '/'
})
