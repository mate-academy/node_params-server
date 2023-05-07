/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.port || 3000;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const {
    pathname,
    searchParams,
  } = new URL(req.url, `http://${req.headers.host}`);

  const parts = pathname.slice(1).split('/');
  const query = Object.fromEntries(searchParams.entries());

  res.statusCode = 200;
  res.statusMessage = 'OK';

  res.end(JSON.stringify({
    parts,
    query,
  }));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = { app };
