'use strict';

const gulp = require('gulp');

const { paths } = require('../../config');
const { getPath } = require('../../helper');

gulp.task('images', () => gulp.src(getPath(paths.src, paths.images.src, paths.images.srcFile))
	.pipe(gulp.dest(getPath(paths.build, paths.images.build))));

gulp.task('fonts', () => gulp.src(getPath(paths.src, paths.fonts.src, paths.fonts.srcFile))
	.pipe(gulp.dest(getPath(paths.build, paths.fonts.build))));

gulp.task('favicon', () => gulp.src(getPath(paths.src, paths.favicon.src, paths.favicon.srcFile))
	.pipe(gulp.dest(getPath(paths.build))));