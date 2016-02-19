var gulp = require("gulp"),
	browserSync = require('browser-sync');

gulp.task('server', function () {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/!**!/!*.js',
		'app/css/!**/!*.css'
	]).on('change', browserSync.reload);
});

	gulp.task('default', ['server', 'watch']);

/*
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
	gulp.src('less/!*.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('less/!*.less', ['less']);
});*/
