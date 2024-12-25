/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const [pathname, params] = req.url.split('?');

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    const parts = pathname.split('/').filter((item) => item.length > 0);
    const query = Object.fromEntries(new URLSearchParams(params));

    res.end(
      JSON.stringify({
        parts,
        query,
      }),
    );
  });
}

module.exports = {
  createServer,
};
