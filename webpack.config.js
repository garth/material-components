var path = require('path');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: 'build/main.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [
        path.resolve(__dirname, 'lib'),
        path.resolve(__dirname, 'node_modules')
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    // don't include all moment locales
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/(en|de)$/)
  ]
};
