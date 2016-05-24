var config = require('../gulp.config.js');
var gulp = require('gulp');
var sass = require('./sass');
var templates = require('./templates');
var js = require('./js');
var api = require('./api');

var watch = require('gulp-watch');

gulp.task('default', ['build:sass', 'build:templates', 'build:js', 'build:api' ]);

gulp.task('watch', function() {
    watch(config.css.src, function() {
        gulp.start('build:sass');
    });
    watch(config.templates.src, function() {
        gulp.start('build:templates');
    });

    watch(config.api.src, function() {
        gulp.start('build:api');
    })
});
