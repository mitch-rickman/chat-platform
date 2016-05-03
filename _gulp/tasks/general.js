var config = require('../config');
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('./sass');
var js = require('./js');
var templates = require('./templates');

gulp.task('default', ['build:sass', 'build:js', 'build:templates']);

gulp.task('watch', function() {
    watch(config.sass.src, function() {
        gulp.start("build:sass");
    });

    watch(config.js.src, function() {
        gulp.start("build:js");
    })
})
