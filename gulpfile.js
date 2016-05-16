var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css');

// Scripts task
// Minifies js files with uglify

gulp.task('scripts', function(){
    return gulp.src('js/*.js') // target the data
        .pipe(uglify()) // apply uglify method on them
        .pipe(gulp.dest('build/js')); // save modified files in a new folder
});

// Styles task
// converts scss to css files and compresses them
gulp.task('styles', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({style: 'compressed'})) // the sass method with its option as an object
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('scss/**/*.scss',['styles']);
});

gulp.task('default',['scripts', 'watch']);