const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const babelOptions = require('./babel.config')

module.exports = {
  entry: './src/index.tsx', // 打包入口
  output: {
    filename: '[name].bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  },
  module: { 
    rules: [ // 转换规则
    {
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] // 对应的 Loader 名称
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'] // 对应的 Loader 名称
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          // 输出文件位置以及文件名
          filename: "images/[hash][ext]"
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
        generator: {
          // 输出文件位置以及文件名
          filename: "fonts/[hash][ext]"
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/source',
      },
    ]
  },
  plugins:[ // 配置插件
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css'
      }),
  ],
}
