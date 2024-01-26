/* eslint-disable no-console */
/* Don't change code below */

'use strict';

const { createServer } = require('./createServer');

const PORT = process.env.PORT || 5700;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
    console.log('Available at http://localhost:5700');
  });
