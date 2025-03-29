/* eslint-disable no-console */
/* Don't change code below */

'use strict';

const { createServer } = require('./createServer');

createServer().listen(5701, () => {
  console.log(`Server is running on http://localhost:${5701} 🚀`);
});
