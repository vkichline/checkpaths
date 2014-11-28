/*
 * grunt-checkpaths
 * https://github.com/vkichline/checkpaths
 *
 * Copyright (c) 2014 Van Kichline
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
     ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    checkpaths: {
      options: {
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['checkpaths']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
