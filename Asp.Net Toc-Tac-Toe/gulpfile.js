const gulp = require('gulp');
const webpack = require('webpack-stream');


gulp.task('default', function() {
  return gulp.src('src/index.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});