const { Configuration } = require('webpack')
const path = require('path')

/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: 'none', // none | development | production
  entry: './src/index.ts', // 入口文件
  output: {
    filename: 'index.js', // 输出文件名
    path: path.resolve(__dirname, 'lib'), // 输出路径
    library: 'wujievue', // 定义全局变量
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true, // 默认为false，设置为true时会为模块的每个导出提供一个全局变量
  },
  // 需要排除的依赖
  externals: {
    vue: 'vue',
    wujie: 'wujie',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'swc-loader',
        exclude: /node_modules/,
      },
    ],
  }
}

module.exports = config
