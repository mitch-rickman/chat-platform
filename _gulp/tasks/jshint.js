var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');

var browserSync = require('browser-sync').get('server');

gulp.task('lint', function() {
    return gulp.src(config.js.src)
        .pipe( jshint() )
        .pipe( jshint.reporter('default') )
        .pipe( browserSync.stream() );
});
