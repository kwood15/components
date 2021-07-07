const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     },
      //     { loader: 'sass-loader' }
      //   ]
      // }
      // {
      //   test: /\.css$/i,
      //   loader: 'css-loader',
      //   options: {
      //     modules: true
      //   }
      // },
      // {
      //   test: [/.css$|.scss$/],
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     'sass-loader'
      //   ]
      // }
      // {
      //   test: /\.module\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         modules: true
      //       }
      //     },
      //     {
      //       loader: 'sass-loader'
      //     },
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    })
    // new MiniCssExtractPlugin({
    //   filename: '[name].[hash].css',
    //   chunkFilename: '[id].[hash].css'
    // })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
