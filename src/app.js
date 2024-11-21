/* eslint-disable no-console */
/* Don't change code below */

'use strict';

const { createServer } = require('./createServer');
const { PORT } = require('./constant');

createServer().listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
