var config = require('../config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

gulp.task('build:sass', function( cb ) {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        mqpacker,
        csswring
    ];

    return gulp.src( config.sass.src )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss(processors) )
        .pipe( gulp.dest( config.sass.build ) );
});
