/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;
const href = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.statusMessage = 'OK';

  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = normalizedUrl;
  const parts = pathname.slice(1).split('/');
  const query = Object.fromEntries(searchParams.entries());

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

server.listen(PORT, () => {
  console.log(`Server is running on ${href}`);
});

const request = http.request(`${href}/hello/world/123?x=1&search=some`,
  (response) => {
    response.on('data', (data) => {
      process.stdout.write(data);
    });
  });

request.end();
