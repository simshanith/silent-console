'use strict';

module.exports = function gruntTest(grunt) {
  grunt.registerTask('build', 'Create a pristine build of the library.', function() {
    grunt.task.run([
      'clean:dist',
      'clean:build',
      'umd:silent-console',
      'uglify:silent-console',
      'diffCopy:build'
    ]);
  });
};
