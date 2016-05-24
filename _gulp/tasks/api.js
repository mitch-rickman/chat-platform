var config = require('../gulp.config');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build:api', function() {
    return gulp.src( config.api.src )
        .pipe( babel() )
        .pipe( gulp.dest( config.api.build ) );
});
