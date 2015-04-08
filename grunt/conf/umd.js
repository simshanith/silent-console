'use strict';

module.exports = function umdConfig(grunt) {
  return {
    'silent-console': {
      src: 'index.js',
      dest: 'build/silent-console.js',
      objectToExport: 'silentConsole',
      globalAlias: 'silentConsole',
      template: 'unit'
    }
  };
};
