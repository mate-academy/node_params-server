/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parts = [];
    const query = {};
    let urlParts;

    if (req.url.indexOf('?') !== -1) {
      const urlArray = req.url.split('?');

      urlParts = urlArray[0].split('/');

      const queryString = urlArray[1];

      const params = new URLSearchParams(queryString);

      for (const [key, value] of params) {
        query[key] = value;
      }
    } else {
      urlParts = req.url.split('/');
    }

    for (const urlPart of urlParts) {
      if (urlPart) {
        parts.push(urlPart);
      }
    }

    res.writeHead(200);

    res.end(
      JSON.stringify({
        parts: parts,
        query: query,
      }),
    );
  });

  return server;
}

module.exports = {
  createServer,
};
