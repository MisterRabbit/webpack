const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",],
        use: [MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          }
          , {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin(), '...'
    ],
  },
}