'use strict';

module.exports = function gruntTest(grunt) {
  grunt.registerTask('build', 'Create a pristine build of the library.', function() {
    grunt.task.run([
      'clean:dist',
      'clean:build',
      'webpack:silent-console',
      'diffCopy:build'
    ]);
  });
};
