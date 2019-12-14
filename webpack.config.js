const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: ['file-loader']
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};