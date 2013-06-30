/*
 * grunt-yuidoc2md
 * https://github.com/Lloyd/grunt-yuidoc2md
 *
 * Copyright (c) 2013 Lloyd Brookes
 * Licensed under the MIT license.
 */

"use strict";
var y2md = require("yuidoc2md"),
    path = require("path");

module.exports = function(grunt) {

  grunt.registerMultiTask("yuidoc2md", "a markdown generator for yuidoc", function() {
      var options = this.options();
      
      this.files.forEach(function(file){
          var generatedDocs = y2md.getMarkdown({ 
              paths: file.src,
              template: options.template,
              exclude: options.exclude
          });
          generatedDocs.forEach(function(generatedDoc){
              var outputFile = path.resolve(file.dest, generatedDoc.name) + ".md";
              grunt.file.write(outputFile, generatedDoc.markdown);
              grunt.log.oklns(outputFile + " created");
          });
      });
  });

};
