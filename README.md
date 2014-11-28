# grunt-checkpaths

> A grunt plugin to check for paths longer than MAXPATH

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install -g grunt-checkpaths
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-checkpaths');
```

## The "checkpaths" task

### Overview
Configuration is not necessary, but can be used to turn on some options. In your project's Gruntfile, add a section named `checkPaths` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  checkpaths: {
    options: {
      debug: true,
      verbose: true
    }
  },
});
```

### Options

#### options.debug
Type: `boolean`
Default value: `'false'`

If 'true', additional infomation is logged to the console.  Currently, just the options values.

#### options.verbose
Type: `boolean`
Default value: `'false'`

If 'true' all file paths and their lengths are written to the console.

### Usage Examples

#### Default Options
All files at the level of gruntfile.js and below are tested, and any longer than 260 characters are printed out.  If paths longer than MAXPATH are found, the task fails.

```js
grunt.initConfig({
  checkpaths: {
  },
});
```

#### Custom Options
The values of the options are printed, followed by all file paths with their lengths. If paths longer than MAXPATH are found, the task fails.

```js
grunt.initConfig({
  checkpaths: {
    options: {
      debug: true,
      verbose: true
    }
  },
});
```

## Release History
0.1.0 - Nov 27 2014 - Initial release  
0.1.1 - Nov 27 2014 - Readme fixup  
0.1.2 - Nov 27 2014 - Release history  
0.1.3 - Nov 27 2014 - More work on release history  
