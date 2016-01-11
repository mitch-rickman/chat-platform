var config = require('../config').sass;

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

gulp.task('sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        mqpacker,
        csswring
    ];

    gulp.src( config.src )
        .pipe( sass() )
        .pipe( postcss(processors) )
        .pipe( gulp.dest( config.dest ) );
});
