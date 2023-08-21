'use strict';

const http = require('http');

function getParams() {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedURL.pathname.split('/')
      .filter(value => value.trim());
    const searchParams = new URLSearchParams(normalizedURL.search).entries();
    const searchData = {
      parts,
      query: {},
    };

    for (const [key, value] of searchParams) {
      searchData.query[key] = value;
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(searchData));
  });

  server.listen(3000);
}

getParams();

module.exports = {
  getParams,
};
