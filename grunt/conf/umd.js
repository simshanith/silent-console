'use strict';

module.exports = function umdConfig(grunt) {
  return {
    'silent-console': {
      src: 'index.js',
      dest: 'dist/silent-console.js',
      objectToExport: 'silentConsole',
      globalAlias: 'silentConsole',
      template: 'unit'
    }
  };
};
