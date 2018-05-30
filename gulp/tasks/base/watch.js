const gulp = require('gulp');

const { paths } = require('../../config');
const { getPath } = require('../../helper');

gulp.task('watch', () => {
  gulp.watch(getPath(paths.src, paths.pug.src, '**', '*.pug'), gulp.series('pug:dev'));
  gulp.watch(getPath(paths.src, paths.sass.src, '**', '*.scss'), gulp.series('sass'));
  gulp.watch(getPath(paths.src, paths.scripts.src, '**', '*.js'), gulp.series('scripts'));
  gulp.watch(getPath(paths.src, paths.images.src, '**', '*.*'), gulp.series('images'));
});
