/*
 * grunt-checkpaths
 * https://github.com/vkichline/checkpaths
 *
 * Copyright (c) 2014 Van Kichline
 * Licensed under the none license.
 */

'use strict';
module.exports = function (grunt) {

    var MAXPATH = 260;

   // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    // Display debug info if the debug option is set to true
    function dumpDebugInfo(options) {
        if (options.debug) {
            grunt.log.writeflags(options, 'Options');
        }
    }

    // Make sure the folder option is valid. Exit if invalid.
    function verifyFolderExists(folder){
        if(folder === undefined || folder === ""){
            grunt.fail.fatal("The provided 'folder' option was empty or not provided.");
        }

        if(!grunt.file.exists(folder)){
            grunt.fail.fatal("The provided 'folder' option was not found (" + folder + ").");
        }

        if(!grunt.file.isDir(folder)){
            grunt.fail.fatal("The provided 'folder' option is not a folder (" + folder + ").");
        }
    }

    // Test each file under the specified path.
    // Print length and path if the length is > MAXPATH, or ir options.verbose is true.
    // Sumarize with # of files, longest path, and # of files with paths too long.
    // Returns the number of paths that were too long.
    function testAllPaths(options){
       var fileCount = 0;
        var tooLongFileCount = 0;
        var maxLength = 0;
        var base = process.cwd();

        grunt.file.recurse(options.folder, function (abspath, rootdir, subdir, filename) {
            if (grunt.file.isFile(abspath)) {
                // Turn the /'s around into \'s.  This plugin is unlikely to be used on platforms other than Windows.
                var fullPath = base + '\\' + abspath.replace (/\//g, '\\');
                var len = fullPath.length;
                // Display if the path is too long, or if operating in verbose mode.
                if(len > MAXPATH || options.verbose) {
                    grunt.log.writeln('%s: %s', len, fullPath);
                }
                if(len > MAXPATH){
                    tooLongFileCount++;
                }
                fileCount++;
                maxLength = len > maxLength ? len : maxLength;
            }
        });

        grunt.log.writeln("Total number of files: %s", fileCount);
        grunt.log.writeln("Longest path: ", maxLength);
        grunt.log.writeln();

        if(tooLongFileCount > 0) {
            grunt.log.error("%s %s longer than %s characters.", tooLongFileCount, ((1 === tooLongFileCount) ? "path" : "paths"), MAXPATH);
        } else {
            grunt.log.ok("No files with paths longer than %s characters.", MAXPATH);
        }
        return tooLongFileCount;
    }

    // Entry point for checkpaths task.
    grunt.registerTask('checkpaths', 'A grunt plugin to check for paths longer than MAXPATH', function () {
        var options = this.options({
            folder: '.',
            debug: false,
            verbose: false
        });
 
        dumpDebugInfo(options);
        verifyFolderExists(options.folder);
        var errCount = testAllPaths(options);
        if(errCount) {
            return false;
        }
    });
};
