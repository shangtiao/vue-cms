var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

var vueLoader = require('vue-loader/lib/plugin')
module.exports = {
  entry: path.join(__dirname , './src/index.js'),
  output: {
    path: path.join(__dirname , './dist/'),
    filename: 'index.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new vueLoader()
  ],
  module: {
    rules: [
      {test: /\.css$/,use: ['style-loader','css-loader']},
      {test: /\.vue$/,use: 'vue-loader'},
      {test: /\.less$/,use: 'less-loader'},
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}
    ]
  },
  mode: 'development'
}