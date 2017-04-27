var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
 
gulp.task('default', ['minify-css', 'minify-js'], function() {

});

gulp.task('minify-css', function() {
    return gulp.src('wwwroot/css/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('wwwroot/css/'));
});

gulp.task('minify-js', function() {
    return gulp.src('wwwroot/js/site.js')
               .pipe(minify({
                    ext:{
                    src:'-debug.js',
                    min:'.min.js'
            },
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulp.dest('wwwroot/js'))
});