/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Parse the request URL
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    // Extract pathname, remove leading/trailing slashes, and split into parts
    const parts = parsedUrl.pathname
      .split('/')
      .filter((part) => part.length > 0);

    // Extract query parameters into an object
    const queryParams = Object.fromEntries(parsedUrl.searchParams.entries());

    // Create response JSON
    const responseData = {
      parts,
      query: queryParams,
    };

    res.statusCode = 200;
    res.end(JSON.stringify(responseData));
  });
}

// Export the function correctly
module.exports = { createServer };
