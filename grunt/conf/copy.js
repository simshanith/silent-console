'use strict';

module.exports = function copyConfig() {
  return {
    build: {
      files: [{
        expand: true,
        cwd: '<%= paths.build %>',
        src: '**/*',
        dest: '.'
      }]
    }
  }
};