var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpUglify = require('gulp-uglify');
var gulpCssNano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var psi = require('psi');

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

gulp.task('dev', function () {
	var bs = browserSync.create();

	bs.init({
	    server: "./",
	    port: 8000
	});

	bs.reload("*.html");
});

gulp.task('dist', function () {
	var bs = browserSync.create();

	bs.init({
	    server: 'dist',
	    port: 8000
	});
	
	bs.reload("*.html");
});

gulp.task('psi', function() {
	return psi('http://208be688.ngrok.io/', {
		nokey: 'true',
		strategy: 'mobile'
	}).then(function(data) {
		// todo: write to file
		console.log(data);
	});
});