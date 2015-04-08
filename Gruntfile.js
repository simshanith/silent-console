'use strict';
// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
module.exports = function(grunt) {
    require('time-grunt')(grunt);

    var path = require('path');

    // grab an absolute path for project path
    var projectPath = process.cwd();


    // http://firstandthird.github.io/load-grunt-config/
    require('load-grunt-config')(grunt, {
        // point to our directory
        configPath: path.join(projectPath, 'grunt', 'conf'),
        // other initialization options here.
        config: {
            pkg: grunt.file.readJSON('package.json'),
            env: process.env
        },
        // grunt.initConfig
        init: true,
        // https://github.com/shootaroo/jit-grunt
        jitGrunt: {
            // custom tasks can be defined here.
            loadTasks: 'grunt/tasks',
            staticMappings: {
            }
        }
    });

    // default behavior.
    grunt.registerTask('default', 'Grunt.', function() {
        grunt.log.ok(grunt.config('pkg.name'));
        grunt.task.run(['build']);
    });
};
