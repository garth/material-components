var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
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
