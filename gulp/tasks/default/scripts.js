'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

const { paths } = require('../../config');
const { getPath } = require('../../helper');

gulp.task('scripts', () => gulp.src(getPath(paths.src, paths.scripts.src, paths.scripts.srcFile))
	.pipe(babel())
	.pipe(sourcemaps.init())
	.pipe(concat(paths.scripts.buildFile))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(getPath(paths.build, paths.scripts.build))));