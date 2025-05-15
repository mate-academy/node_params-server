/* eslint-disable no-console */
/* Don't change code below */

'use strict';

const { createServer } = require('./createServer');

const PORT = 5701;

const server = createServer();

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});

// Export the function correctly
module.exports = { createServer };
