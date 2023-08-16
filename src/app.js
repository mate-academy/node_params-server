'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname.split('/').filter(el => el !== '');
  const params = Object.fromEntries(url.searchParams.entries());

  res.writeHead(200, {
    'Content-Type': 'aplication/html',
  });

  res.end(JSON.stringify({
    parts: pathname,
    query: params,
  }));
});

server.listen(PORT, () => {
  // console.log(`Server is running on http://localhost:${PORT}`);
});
