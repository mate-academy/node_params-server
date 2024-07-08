/* eslint-disable no-console */
'use strict';

// Write code here
// Also, you can create additional files in the src folder
// and import (require) them here

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const protocol = req.socket.encrypted ? 'https' : 'http';
    const hostName = `${protocol}://${req.headers.host}/${req.url}`;
    const parsedUrl = new URL(hostName);

    const parts = parsedUrl.pathname.split('/').filter((x) => x);
    const query = Object.fromEntries(parsedUrl.searchParams.entries());

    const response = {
      parts,
      query,
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};

module.exports = {
  createServer,
};
