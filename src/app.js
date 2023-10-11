'use strict';

const { createServer } = require('./createServer.js/createServer');

const PORT = 3030;

createServer()
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server started! 🚀');
  });
