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
    port: 8010
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}]
