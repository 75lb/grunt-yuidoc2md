[![NPM version](https://badge.fury.io/js/grunt-yuidoc2md.png)](http://badge.fury.io/js/grunt-yuidoc2md)
[![Dependency Status](https://david-dm.org/75lb/grunt-yuidoc2md.png)](https://david-dm.org/75lb/grunt-yuidoc2md)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-20/grunt-yuidoc2md/README.md?pixel)
# grunt-yuidoc2md

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-yuidoc2md --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-yuidoc2md');
```

## The "yuidoc2md" task

### Overview
In your project's Gruntfile, add a section named `yuidoc2md` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  yuidoc2md: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.template
Type: `String`
Default value: `''`

A string value to the location of a handlebars template to be used to renders the results.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  yuidoc2md: {
    options: {},
    'dest/default_options': ['src/testing', 'src/123']
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, using a custom handlebar template.

```js
grunt.initConfig({
  yuidoc2md: {
    options: {
      template: 'location/of/template.handlebars'
    },
  'dest/default_options': ['src/testing', 'src/123']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

[![NPM](https://nodei.co/npm-dl/grunt-yuidoc2md.png?months=3)](https://nodei.co/npm/grunt-yuidoc2md/)
