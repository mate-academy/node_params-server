/* eslint-disable no-console */
'use strict';

const http = require('http');

const getParams = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname.slice(1);

    if (path === 'favicon.ico') {
      return;
    }

    const partsSet = new Set(path.split('/'));

    partsSet.delete('');

    const parts = [...partsSet];

    const query = Object.fromEntries(url.searchParams.entries());

    const data = JSON.stringify({
      parts,
      query,
    });

    res.end(data);
  });

  server.listen(3000, () => console.log('Server running'));
};

getParams();

module.exports = { getParams };
