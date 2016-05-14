'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var expect = require('chai').expect;

gulp.task('unit-test', function (done) {

  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();

});