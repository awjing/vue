const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

// 提供到最终真实文件地址的映射关系
module.exports = {
  vue: resolve('src/platforms/web/enztry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
