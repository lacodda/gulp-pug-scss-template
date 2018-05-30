module.exports = {
  server: {
    port: 8400,
  },
  settings: {
    pug: {
      pretty: true,
    },
    sass: {
      outputStyle: 'compressed',
      sourceMap: true,
    },
  },
  paths: {
    src: 'src',
    build: 'build',
    data: 'data',
    environment: 'environment',
    pug: {
      src: 'templates',
      build: '',
      srcFile: '*.pug',
    },
    sass: {
      src: 'scss',
      build: 'assets/css',
      srcFile: 'main.scss',
      buildFile: 'main.min.css',
    },
    scripts: {
      src: 'js',
      build: 'assets/js',
      srcFile: '*.js',
      buildFile: 'main.min.js',
    },
    images: {
      src: 'img',
      build: 'assets/img',
      srcFile: '**/*.*',
    },
    fonts: {
      src: 'fonts',
      build: 'assets/fonts',
      srcFile: '**/*.*',
    },
    favicon: {
      src: 'img',
      build: 'assets/favicon',
      srcFile: 'lyrn.svg',
    },
    docs: {
      src: 'docs',
      build: 'docs',
      srcFile: '*.md',
      templates: 'templates',
      assets: 'assets',
    },
  },
};
