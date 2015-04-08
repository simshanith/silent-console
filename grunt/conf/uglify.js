'use strict';

module.exports = function uglifyConfig(grunt) {
  return {
    'silent-console': {
      files: [{
        expand: true,
        cwd: '<%= paths.build %>',
        src: ['silent-console.js'],
        dest: '<%= paths.build %>',
        ext: '.min.js',
        extDot: 'last'
      }],
      options: {
        preserveComments: 'some'
      }
    }
  }
};