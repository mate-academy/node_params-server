'use strict';

const { createServer } = require('./createServer');

createServer().listen(5001, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});
