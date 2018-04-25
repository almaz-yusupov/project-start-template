var gulp 					= require('gulp'),
		browserSync   = require('browser-sync').create(),
		sass 					= require('gulp-sass'),
		cleanCSS 			= require('gulp-clean-css'),
		concat 				= require('gulp-concat'),
		uglify 				= require('gulp-uglifyjs'),
		wait					= require('gulp-wait')
		rename 				= require('gulp-rename');

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	});
});

gulp.task('sass', function(){
	gulp.src('app/scss/**/*.scss')
		.pipe(wait(500))
		.pipe(sass({  outputStyle: 'expand'  })).on('error', sass.logError)
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('sass:build', function(){
	gulp.src('app/scss/**/*.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

var addLibsJS = gulp.src([
				//'path to .js file',
				'app/libs/jquery/dist/jquery.min.js',
				'app/js/common.js' //always in the end
				]);

gulp.task('js', function(){
	addLibsJS
		.pipe(concat('scripts.min.js'))
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream());
});

gulp.task('js:build', function(){
	addLibsJS
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('build', ['sass:build', 'js:build'], function(){
	gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('app/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['watch']);
