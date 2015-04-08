'use strict';

module.exports = function cleanConfig(grunt) {
  return {
    dist: {
      files: [{
        src: ['silent-console*.js']
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '<%= paths.build %>',
        src: ['**/*']
      }]
    }
  }
};