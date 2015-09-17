var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: { baseDir: "./" }
    });
    gulp.watch('*.html').on('change', browserSync.reload);
});

 
gulp.task('css', function () {
  gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

 
gulp.task('minify', function() {
  return gulp.src('main.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));
});