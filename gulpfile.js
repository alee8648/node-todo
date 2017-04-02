var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	console.log("Compiling SASS files");
	return gulp.src('dev/sass/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('build'))
})

gulp.task('watch', function() {
	gulp.watch('dev/**/*.scss', ['sass']);	
})