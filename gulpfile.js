'use strict';
var gulp = require('gulp'),
    Server = require('karma').Server,
    sass= require('gulp-sass'),
    webserver= require('gulp-webserver');

gulp.task('unit-test', function (done) {

  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();

});

//sass to css compile task
gulp.task('sass', function(){
    return gulp.src('app/styles/**/main.scss')
        .pipe(sass()).pipe(gulp.dest('app/assets/css'));
});

//watch task
gulp.task('watch', function(){
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    // Other watchers
});

//webserver with livereload
gulp.task('webserver', function(){
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});
