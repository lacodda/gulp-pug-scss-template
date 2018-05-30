const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const { getPath } = require('../../helper');
const { server, paths } = require('../../config');

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: getPath(paths.build),
    },
    port: server.port,
  });

  gulp.watch(getPath(paths.build, '/**/*')).on('change', browserSync.reload);
});
