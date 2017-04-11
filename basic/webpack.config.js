const webpack = require("webpack");

module.exports = [{
  entry: {
    app: './src/index.js',
  },
  output: {
    path: __dirname,
    filename: './index.js',
  },
  devServer: {
    port: 8020
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-flow-strip-types"]
        }
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader'}],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}]