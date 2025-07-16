// 'use strict';

const http = require('http');

const BASE = 'http://localhost:5701';

function createServer() {
  /* Write your code here */
  return http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, BASE);

    try {
      const pathArray = normalizedUrl.pathname
        .split('/')
        .filter((part) => part.length > 0);
      const query = Object.fromEntries(normalizedUrl.searchParams.entries());

      // eslint-disable-next-line no-console
      console.log(query);

      res.writeHead(200, { 'content-type': 'application/json' });

      res.end(
        JSON.stringify({
          parts: pathArray || [],
          query: query,
        }),
      );
    } catch (e) {
      res.writeHead(500, { 'content-type': 'text/html' });
    }
  });
  // Return instance of http.Server class
}

module.exports = {
  createServer,
};
