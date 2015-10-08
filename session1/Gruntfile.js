module.exports = function (grunt) {

  'use strict';

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      config: require(path.join(process.cwd(), 'grunt', 'options/') + 'config.json'),
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });

};
