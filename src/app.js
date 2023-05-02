'use strict';

const http = require('http');

require('dotenv').config();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const parts = normalizedUrl.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  const resBody = {
    parts,
    query,
  };

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(resBody));
});

const options = {
  hostname: HOSTNAME.toString(),
  port: PORT,
};

server.listen(options, () => {
  global.console.log(`Server running at http://localhost:${PORT}/`);
});
