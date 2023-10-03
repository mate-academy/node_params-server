/* eslint-disable no-console */
'use strict';

const { handleRequest } = require('./request');

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
