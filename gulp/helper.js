'use strict';

const path = require('path');

const root = path.dirname(__dirname);

module.exports = {
  getPath: (...args) => path.resolve(path.join(root, ...args)),

  errorHandler: (error) => {
    process.stderr.write(error.message + '\n');

    // this.emit('end');
  },
};
