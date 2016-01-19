var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create("server");
var sass = require('./sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./build"
    });
});
