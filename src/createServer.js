'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:5701`);

   const pathName = urlParams.pathname.split('/').filter(Boolean);

    const searchParams = {};

    urlParams.searchParams.forEach((value, key) => {
      if (searchParams[key] !== undefined) {
        searchParams[key] = [].concat(searchParams[key], value);
      } else {
        searchParams[key] = value;
      }
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        parts: pathName,
        query: searchParams,
      }),
    );
  });
}

module.exports = {
  createServer,
};
