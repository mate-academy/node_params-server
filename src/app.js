'use strict';

const http = require('http');

const getParams = () => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname.slice(1);

    if (path === 'favicon.ico') {
      return;
    }

    const parts = path.split('/');

    const query = Object.fromEntries(url.searchParams.entries());

    const data = JSON.stringify({
      parts,
      query,
    });

    res.end(data);
  });

  server.listen(3000);
};

getParams();

module.exports = { getParams };
