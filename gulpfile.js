'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var rename = require('gulp-rename');
var postcss = require('gulp-postcss');

var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = {
	sass: './src/sass/**/*.scss',
	css: './prod/css',
	jsSrc: './src/js/**/*.js',
	jsDest: './prod/js'
}

// renders sass
gulp.task('sass', function () {
	gulp.src( config.sass )
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest( config.css ))
		.pipe( browserSync.stream() );
});

// consolidates/minifies css
gulp.task('css', function() {
	var processors = [
		autoprefixer({browsers: ['last 2 version']}),
		mqpacker,
		csswring
	];

	return gulp.src( './prod/css/app.css' )
		.pipe( rename({suffix: ".min"}) )
		.pipe( postcss(processors) )
		.pipe( gulp.dest( config.css ) );
});


// concatinates / minifies javascript
gulp.task('js', function() {
	gulp.src( config.jsSrc )
		.pipe( concat('functions.js') )
		.pipe( gulp.dest( config.jsDest ) )
		.pipe( rename('functions.min.js') )
		.pipe( uglify() )
		.pipe( gulp.dest( config.jsDest ));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: "./prod"
	});

	gulp.watch("prod/*.html").on('change', browserSync.reload );
	gulp.watch("src/sass/**/*.scss", ['sass']);
	gulp.watch("src/js/**/*.js", ['js']);
});

gulp.task('default', function() {

});
