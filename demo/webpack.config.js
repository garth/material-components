var Webpack = require('webpack');
var path = require('path');

console.log(__dirname);

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
