const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      // }
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         import: false,
      //         modules: true
      //       }
      //     }
      //   ],
      //   include: /\.module\.css$/
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ],
      //   exclude: /\.module\.css$/
      // }
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      // }
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]',
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    })
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    // })
  ]
}


