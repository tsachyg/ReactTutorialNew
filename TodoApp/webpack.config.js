const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const context = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: { 'main': './src/index.jsx' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('cssnano')(),
                require('postcss-cssnext')(),
              ]
            }
          }
        ]
      },
      {
        test: /\.js?x?$/,
        use: {
          loader: 'babel-loader',
          //options: {
          //  presets: ['@babel/preset-react', '@babel/preset-env']
          //},
          query: {
            plugins: [
              '@babel/transform-react-jsx',
              [
                'react-css-modules', {
                  "generateScopedName": "[name]__[local]___[hash:base64:5]",
                  "handleMissingStyleName": "warn",
                  "filetypes": {
                    ".scss": {
                      "syntax": "postcss-scss"
                    }
                  }
                }
              ]
            ]
          }
        }
      },
    ]
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};