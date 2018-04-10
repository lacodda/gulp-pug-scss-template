'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');

const { paths, settings } = require('../../config');
const { getPath, errorHandler } = require('../../helper');

gulp.task('pug', () => gulp.src(getPath(paths.src, paths.pug.src, paths.pug.srcFile))
	.pipe(pug(settings.pug))
	.on('error', errorHandler)
	.pipe(gulp.dest(getPath(paths.build, paths.pug.build))));