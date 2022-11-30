const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: 'img/[contenthash][ext]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      }
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'img/'
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/favorites.html',
      filename: 'favorites.html'
    })
  ]
}