var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('src/css'))

});
gulp.task('jsCss',function(){
	gulp.watch('src/*.scss',['compileSass']);
});

var browserSync = require('browser-sync');
gulp.task('server',function(){
	browserSync.init({
		// server:'../src'
		proxy:'http://localhost/ajx/',
		port:999,
		files:['src/**.html','src/css/*.css']
		
	});
	gulp.watch('src/sass/*.scss',['compileSass']);
});