const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const path = require('path');

const { paths, settings } = require('../../config');
const { getPath, errorHandler } = require('../../helper');

gulp.task('pug:dev', () => gulp.src(getPath(paths.src, paths.pug.src, paths.pug.srcFile))
  .pipe(data(() => require(getPath(paths.src, paths.environment, 'dev.json'))))
  .pipe(data(file => require(getPath(paths.src, paths.data, `${path.basename(file.path)}.json`))))
  .pipe(pug(settings.pug))
  .on('error', errorHandler)
  .pipe(gulp.dest(getPath(paths.build, paths.pug.build))));

gulp.task('pug:prod', () => gulp.src(getPath(paths.src, paths.pug.src, paths.pug.srcFile))
  .pipe(data(() => require(getPath(paths.src, paths.environment, 'prod.json'))))
  .pipe(data(file => require(getPath(paths.src, paths.data, `${path.basename(file.path)}.json`))))
  .pipe(pug(settings.pug))
  .on('error', errorHandler)
  .pipe(gulp.dest(getPath(paths.build, paths.pug.build))));
