var path = require('path');

var config = {
  entry: ['./src/app.js'],
  resolve: { alias: {} },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query:
            {
              presets:['es2015','react']
            }

      }
    ]
  },
  resolve: {
extensions: ['', '.js', '.es5']

}
}

module.exports = config