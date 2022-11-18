'use strict';
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`)

  const parts = normalizedUrl.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedUrl.searchParams.entries())

  res.end(JSON.stringify({ parts, query}))
})

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on: http://localhost:' + PORT);
});