var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var gulpIf = require('gulp-if');
var gulpUglify = require('gulp-uglify');
var gulpCssNano = require('gulp-cssnano');
var gulpSmoosher = require('gulp-smoosher');
var gulpGm = require('gulp-gm');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var psi = require('psi');


// build

gulp.task('clean', function() {
	return del('dist');
});

gulp.task('buildjs', function() {
	return gulp.src(['./js/*.js', './views/js/*.js'], {base: './'})
		.pipe(gulpIf('*.js', gulpUglify()))
		.pipe(gulp.dest('dist'))
});

gulp.task('buildcss', function() {
	return gulp.src(['./css/*.css', './views/css/*.css'], {base: './'})
		.pipe(gulpIf('*.css', gulpCssNano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('buildhtml', function() {
	return gulp.src(['./*.html', './views/*.html'], {base: './'})
		.pipe(gulpSmoosher())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyJS: true,
			minifyCSS: true
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('buildimages', function () {
  gulp.src('./views/img/*', {base: './'})
    .pipe(gulpGm(function (gmfile) {
      return gmfile.resize(100, 100);
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
	runSequence('clean', 'buildjs', 'buildcss', 'buildhtml', 'buildimages');
});

// page speed insights

gulp.task('psi', function() {
	return psi('http://7b020264.ngrok.io/', {
		nokey: 'true',
		strategy: 'mobile'
	}).then(function(data) {
		console.log(data);
	});
});

// deployment

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