/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const parsedURL = req.url.split('?');
    const [pathname, searchParams = ''] = parsedURL;
    const parts = pathname.split('/').filter((el) => el !== '');
    const query = searchParams.split('&').reduce((acc, curr) => {
      const [key, value] = curr.split('=');

      acc[key] = value;

      return acc;
    }, {});

    res.writeHead(200, { 'Content-Type': 'application/json' });

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
