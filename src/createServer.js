/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const newReqUrl = req.url.replace(/\/+/g, '/');
    const normalizedURL = new URL(newReqUrl, `http://${req.headers.host}`);
    const parts = normalizedURL.pathname.split('/').filter(Boolean);
    const query = Object.fromEntries(normalizedURL.searchParams);

    res.end(JSON.stringify({ parts, query }));
  });
}

module.exports = { createServer };
