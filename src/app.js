'use strict';

const { server } = require('./server.js');
const PORT = 3000;

server.listen(PORT, () => {
  global.console.log(`Server are running now at http://localhost:${PORT}`);
});
