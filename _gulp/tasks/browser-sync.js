var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('./sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch(config.sass.src, ['sass-watch']);
});

gulp.task('sass-watch', ['sass'], function() {
    browserSync.reload('./build/css/*.css');
})
