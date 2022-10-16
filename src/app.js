'use strict';

const http = require('http');
const PORT = 8080;
const data = {};

const requestListener = (req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const params = Object.fromEntries(normalizedURL.searchParams.entries());
  const path = normalizedURL.pathname.split('/').slice(1);

  data.parts = path;
  data.query = params;
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(data, null, 3));
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
