const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const scsslint = require('gulp-scss-lint');

const { paths, settings } = require('../../config');
const { getPath, errorHandler } = require('../../helper');

gulp.task('scss-lint', () => gulp.src(getPath(paths.src, paths.sass.src))
  .pipe(scsslint({ config: '.scss-lint.yml' }))
  .on('error', errorHandler));

gulp.task('sass', () => gulp.src(getPath(paths.src, paths.sass.src, paths.sass.srcFile))
  .pipe(sourcemaps.init())
  .pipe(sass({ includePaths: [getPath(paths.src, paths.sass.src)], ...settings.sass }))
  .on('error', errorHandler)
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .on('error', errorHandler)
  .pipe(sourcemaps.write('.'))
  .pipe(rename(paths.sass.buildFile))
  .pipe(gulp.dest(getPath(paths.build, paths.sass.build))));
