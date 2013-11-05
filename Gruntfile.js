/*
 * grunt-yuidoc2md
 * https://github.com/Lloyd/grunt-yuidoc2md
 *
 * Copyright (c) 2013 Lloyd Brookes
 * Licensed under the MIT license.
 */

"use strict";

var path = require("path");

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>",
      ],
      options: {
        jshintrc: ".jshintrc",
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ["tmp", "tmp2"],
    },

    // Configuration to be run (and then tested).
    yuidoc2md: {
      v2: {
          src: "test/fixtures/v2/**/*.js",
          expand: true,
          rename: function(dest, src){
              var basename = path.basename(src),
                  newFileName = basename.replace(".js", ".md"),
                  dirname = path.dirname(src);
              return path.resolve(dirname, "docs", newFileName);
          }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ["test/*_test.js"],
    },

  });

  // Actually load this plugin"s task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin"s task(s), then test the result.
  grunt.registerTask("test", ["clean", "yuidoc2md", "nodeunit"]);

  // By default, lint and run all tests.
  grunt.registerTask("default", ["jshint", "test"]);

};
