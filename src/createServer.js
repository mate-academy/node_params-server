// Write code here
// Also, you can create additional files in the src folder
// and import (require) them here
'use strict';

const http = require('http');

const BASE_URL = 'http://localhost:5701';

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, BASE_URL);

    const queryParams = Object.fromEntries(url.searchParams.entries());

    const pathName = url.href.includes(BASE_URL)
      ? url.href.replace('http://localhost:5701', '').replace(url.search, '')
      : url.href.replace('http://', '').replace(url.search, '');

    const pathNameParts = pathName
      .replace(/\/\//g, '/')
      .split('/')
      .filter(Boolean);

    res.end(JSON.stringify({
      parts: pathNameParts,
      query: queryParams,
    }));
  });
}

module.exports = { createServer };
