/// <binding ProjectOpened='webpack-watch' />
const gulp = require('gulp');
const webpack = require('webpack-stream');


gulp.task('webpack-watch', function () {
  var webpackConfig = require('./webpack.config.js');
  webpackConfig.watch = true;
  webpackConfig.mode = 'development';
  return gulp.src('src/index.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});