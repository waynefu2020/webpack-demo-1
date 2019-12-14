const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'XDML - 写代码啦',
    template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: ['file-loader'],
      },
      {
        test: /\.styl$/,
        loader: ['style-loader','css-loader','stylus-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {implementation: require('dart-sass'),}
          },
        ],
      },
    ],
  },
};