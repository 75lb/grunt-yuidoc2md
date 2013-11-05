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

        grunt.log.debug("options: " + JSON.stringify(options));

        this.files.forEach(function(fileObject){
            grunt.log.debug(JSON.stringify(fileObject, null, "\t"));
            fileObject.src.forEach(function(file){
                var generatedDocs = y2md.getMarkdown2(file);
                grunt.log.debug(generatedDocs);
                grunt.file.write(fileObject.dest, generatedDocs);
                grunt.log.ok(fileObject.dest);
            });
        });
    });
};
