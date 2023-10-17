/* eslint-disable no-console */
'use strict';
require('dotenv').config();

const server = require('./src/app.js').server;

console.log(process.env.SERVER_PORT);

const PORT = process.env.SERVER_PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
