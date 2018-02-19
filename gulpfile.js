var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpUglify = require('gulp-uglify');
var gulpCssNano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');

gulp.task('useref', function() {
	return gulp.src('./*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', gulpUglify()))
		.pipe(gulpIf('*.css', gulpCssNano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
	return gulp.src('img/*.+(png|jpg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});