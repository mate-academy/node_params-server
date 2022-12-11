'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, resp) => {
  const normalizeUrl = new URL(req.url, `http://${req.headers.host}`);

  const respObj = {};

  const parts = normalizeUrl.pathname.slice(1).split('/');

  respObj.parts = parts;

  const queryObj = Object.fromEntries(normalizeUrl.searchParams.entries());

  respObj.query = queryObj;

  resp.end(JSON.stringify(respObj));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
