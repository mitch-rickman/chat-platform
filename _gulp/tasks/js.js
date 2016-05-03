var config = require('../config');
var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');


gulp.task('build:js', function() {
    return gulp.src(config.js.src)
        .pipe( babel() )
        .pipe( jshint() )
        .pipe( jshint.reporter('default') );
    });
