'use strict';

module.exports = function pathsConfig(grunt) {

  var projectPath = process.cwd();

  return {
    project: projectPath,
    build: 'build'
  }

};
