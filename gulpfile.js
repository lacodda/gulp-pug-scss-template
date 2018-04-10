'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp/tasks', { recurse: true });

// Commonly used tasks defined here.
gulp.task('default', gulp.series(
	'clean',
	gulp.parallel(
		'pug',
		'sass',
		'scripts',
		'images',
		'fonts',
		'favicon',
	),
	gulp.parallel('watch', 'server')));

