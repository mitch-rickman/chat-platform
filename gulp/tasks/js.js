var config = require('../gulp.config');
var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

var webpackConfig = require('../../webpack.config.js')

gulp.task('build:js', function() {
    return gulp.src( config.js.entry )
        .pipe( webpack( webpackConfig ) )
        .pipe( gulp.dest( config.js.build ));
});

gulp.task('watch:js', function() {
    var c =  webpackConfig;

    c.watch = true

    return gulp.src( config.js.entry )
        .pipe( webpack( c ) )
        .pipe( gulp.dest( config.js.build ));
});
