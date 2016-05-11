var gulp = require('gulp'),
	// uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	// concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	webpack = require('gulp-webpack'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

// gulp.task('basejs', function () {
// 	return gulp.src(['src/libs/jquery.min.js',
// 					'src/libs/semantic.min.js',
// 					'src/libs/jquery.form.min.js',
// 					'src/libs/jquery.datetimepicker.js',
// 					'src/libs/Chart.min.js',
// 					'src/libs/messenger.min.js',
// 					'src/libs/messenger-theme-flat.js'])
// 		.pipe(concat('base.js'))
// 		.pipe(rename({ suffix: '.min' }))
// 		.pipe(gulp.dest('dist/libs'))
// 		.pipe(notify({ message: 'Basejs task complete' }));
// });

// gulp.task('basecss', function () {
// 	return gulp.src('src/libs/*.css')
// 		.pipe(concat('base.css'))
// 		.pipe(rename({ suffix: '.min' }))
// 		.pipe(gulp.dest('dist/libs'))
// 		.pipe(notify({ message: 'Basecss task complete' }));
// });

gulp.task('scripts', function () {
	return gulp.src('src/main.js')
		.pipe(webpack({
			output: {
				filename: 'build.js'
			},
			module: {
				loaders: [{
					test: /\.vue$/,
					loader: 'vue'
				}, {
					test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
				}, {
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract("style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
				}, {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                }]
			},
			vue: {
		        css: ExtractTextPlugin.extract("css"),
		        sass: ExtractTextPlugin.extract("css!sass-loader")
		    },
            babel: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            },
			plugins: [
				new ExtractTextPlugin("style.css", {
			        allChunks: true,
			        disable: false
			    })
			]
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist'))
		.pipe(notify({ message: 'scripts task complete' }));
});

gulp.task('styles', function () {
	return gulp.src('src/public/stylesheets/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie10', 'ios 6', 'android 4'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/'))
		.pipe(notify({ message: 'styles task complete' }));
});

// 使用connect启动一个web服务器
gulp.task('server', function() {
	connect.server({
		livereload : true
	});
});
// reload server
gulp.task('reload-dev', ['scripts'], function() {
	gulp.src('src/**/*.*')
		.pipe(connect.reload());
});
// watch
gulp.task('watch', function() {
	// 监听生产环境目录变化
	gulp.watch('src/**/*.*', ['reload-dev']);
});

gulp.task('watchWithoutServer', function () {
	gulp.watch('src/**/*.*', ['scripts']);
})

gulp.task('includebase', ['basejs', 'basecss', 'styles', 'scripts', 'server', 'watch']);
gulp.task('default', ['scripts', 'watchWithoutServer'/*, 'styles', 'server', 'watch'*/]);
gulp.task('ser', ['scripts', 'styles', 'server', 'watch']);