'use strict';

const http = require('http');

http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    res.end();

    return;
  }

  const pathName = normalizedURL.pathname.slice(1);
  const search = normalizedURL.search;

  if (!pathName && !search) {
    res.end('There are no path and queries');

    return;
  }

  const parts = pathName.split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const responseData = {
    parts,
    query,
  };

  const preparedData = JSON.stringify(responseData);

  res.end(preparedData);
}).listen(5700);
