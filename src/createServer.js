/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const getPathnameParts = (pathname) => {
    return pathname.split('/').filter((part) => part !== '');
  };

  return http.createServer((req, res) => {
    const url = new URL(`http://${req.headers.host}${req.url}`);

    const { pathname, searchParams } = url;
    const parts = getPathnameParts(pathname);
    const query = Object.fromEntries(searchParams.entries());

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const response = {
      parts,
      query,
    };

    res.end(JSON.stringify(response));
  });
}

module.exports = {
  createServer,
};
