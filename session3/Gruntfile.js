module.exports = function (grunt) {

  'use strict';

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      options: {
      },
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json'),
      files: require(path.join(process.cwd(), 'grunt', 'options/') + 'files.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    postProcess: function(config) {}
  });

};
