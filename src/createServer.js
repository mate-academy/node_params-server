/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
      res.setHeader('Content-Type', 'application/json');

      const data = {
        parts: [],
        query: {},
      };

      const parts = req.url
        .split('?')[0]
        .split('/')
        .filter((item) => item.trim());

      const params = req.url.split('?')[1]?.split('&');

      if (Array.isArray(params)) {
        for (const i of params) {
          const key = i.split('=')[0].trim();
          const value = i.split('=')[1].trim();

          data.query[key] = value;
        }
      }

      data.parts.push(...parts);

      res.statusCode = 200;
      res.end(JSON.stringify(data));
    }
  });

  return server;
}

module.exports = {
  createServer,
};
