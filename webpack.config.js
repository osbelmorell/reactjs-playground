var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/build');
var SRC_DIR = path.resolve(__dirname, 'public/src');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}


var config = {
  entry: {
        bundle: getEntrySources([
            SRC_DIR + '/js/index.jsx'
        ])
    },
  output: {
    publicPath: 'http://localhost:8080/',
      filename: 'public/build/[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot' , 'jsx'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('public/build/style.css', {
          allChunks: true
      })
  ]
};

module.exports = config;