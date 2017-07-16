var gulp  			= require('gulp'),
	watch 			= require('gulp-watch'),
	browserSync	 	= require('browser-sync').create();


gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app',
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

//watch task will run cssInject but cssInject dependency is styles task so 
//jab styles task complete hoga then cssInject task run hoga 
//and jo hai browsersync karna :)
gulp.task('cssInject',['styles'], function() {
	return gulp.src('./app/temp/styles/style.css')
			.pipe(browserSync.stream());
});