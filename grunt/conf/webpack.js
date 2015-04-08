'use strict';

module.exports = function (grunt) {
  var path = require('path');
  var webpack = require('webpack');

  return {
    'silent-console': {
      entry: [
        './silent-console.js'
      ],
      output: {
        path: '<%= paths.project %>/<%= paths.build %>',
        filename: 'silent-console.min.js',
        library: 'silent-console',
        libraryTarget: 'umd'
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          preserveComments: 'some',
          compress: {
            unused: false
          }
        })
      ]
    }
  };
};
