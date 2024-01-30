/* eslint-disable no-console */
'use strict';

function createServer() {
  const http = require('http');

  return http.createServer((req, res) => {
    let parts = [];
    let query = {};

    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

    if (normalizedURL.pathname) {
      const pathName = normalizedURL.pathname;

      parts = pathName.slice(1).split('/').filter(c => c !== '');
    }

    if (!parts.length) {
      query = Object.fromEntries(normalizedURL.searchParams.entries());
    }

    if (normalizedURL.search) {
      const paramsPairs = normalizedURL.search
        .slice(1)
        .split('&')
        .map(p => p.split('='));

      if (paramsPairs.every(pair => !pair.includes(''))) {
        paramsPairs.forEach(pair => {
          const [key, value] = pair;

          query[key] = value;
        });
      }
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
      parts, query,
    }));
  });
}

module.exports = {
  createServer,
};
