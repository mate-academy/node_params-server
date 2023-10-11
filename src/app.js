'use strict';

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const normalizedUrl = new url.URL(req.url, `http://${req.headers.host}`);

  if (normalizedUrl.pathname !== '/favicon.ico') {
    const parts = normalizedUrl.pathname.slice(1).split('/');
    const params = normalizedUrl.searchParams.entries();
    const query = Object.fromEntries(params);
    const respond = {
      parts,
      query,
    };

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(JSON.stringify(respond));
  }
});

server.listen(PORT);
