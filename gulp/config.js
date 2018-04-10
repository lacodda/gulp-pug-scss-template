'use strict';

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
		pug: {
			src: 'templates',
			build: '',
			srcFile: '*.pug',
		},
		sass: {
			src: 'scss',
			build: 'css',
			srcFile: 'main.scss',
			buildFile: 'main.min.css',
		},
		scripts: {
			src: 'js',
			build: 'js',
			srcFile: 'main.js',
			buildFile: 'main.min.js',
		},
		images: {
			src: 'img',
			build: 'img',
			srcFile: '**/*.*',
		},
		fonts: {
			src: 'fonts',
			build: 'fonts',
			srcFile: '**/*.*',
		},
		favicon: {
			src: 'icons',
			build: '',
			srcFile: 'favicon.png',
			buildFile: 'favicon.png',
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