var config = require('../config');
var gulp = require('gulp');

gulp.task('build:templates', function() {
	return gulp.src( config.templates.src )
		.pipe( gulp.dest(config.templates.build) );
})
