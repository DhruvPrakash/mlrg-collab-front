var gulp = require('gulp'),
	jshint = require('gulp-jshint')
	less = require('gulp-less')
	browserSync = require('browser-sync'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');
	uglify = require('gulp-uglify');
	eslint = require('gulp-eslint');


var thirdPartyCSSPaths = [
	'node_modules/bootstrap/dist/css/bootstrap.min.css',
	'node_modules/sweetalert/dist/sweetalert.css',
	'node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'
];

gulp.task('default', ['css-concat','browserify','browser-sync','watch']);
// gulp.task('jshint', function(){
// 	return gulp.src('source/javascript/**/*.js')
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('jshint-stylish'));
// });

// gulp.task('build-css', function(){
// 	return gulp.src('source/less/**/*.less')
// 		.pipe(less())
// 		.pipe(gulp.dest('public/assets/stylesheets'));
// });


gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('app/styles/*.css',['css-concat']);
	//gulp.watch('source/less/**/*.less', ['build-css']);
});

gulp.task('browser-sync', function(){
	var files = ['app/**/*.html',
		'app/**/*.js',
		'app/styles/*.css'
	];

	browserSync.init(files, {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('copy-bs-fonts', function(){
  gulp.src('node_modules/bootstrap/dist/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('css-concat', function(){
	gulp.src('app/styles/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/styles'));
	
	gulp.src(thirdPartyCSSPaths)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('browserify', function(){
	gulp.src(['app/app.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/scripts'));
});

gulp.task('uglify', function(){
	return gulp.src(['./dist/scripts/scripts.js'])
		.pipe(uglify());
});

gulp.task('lint', function(){
	return gulp.src(['app/**/*.js','!node_modules/**'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
})


gulp.task('build', ['browserify','css-concat']);
