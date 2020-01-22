// 移动端开发调试工具
const VConsolePlugin = require('vconsole-webpack-plugin');
module.exports = {
  // 基本路径
  publicPath: './',
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    // 测试环境和本地环境 增加 vconsole
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.push(new VConsolePlugin({ enable: true }));
    }
  }
};
