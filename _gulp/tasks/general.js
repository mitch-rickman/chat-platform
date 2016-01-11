var gulp = require('gulp');
var sass = require('./sass');

var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.sass.src, ['sass'])
})
