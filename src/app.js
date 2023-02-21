'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const qIndex = req.url.indexOf('?');
  const parts = req.url.slice(1, qIndex).split('/');
  const query = {};

  for (const part of req.url.slice(qIndex + 1).split('&')) {
    const split = part.split('=');

    if (split[0] in query) {
      query[split[0]] = [...query[split[0]], split[1]];
    } else {
      query[split[0]] = [split[1]];
    }
  }

  // finishes the response
  res.end(JSON.stringify({
    parts,
    query,
  }));
});

// Enables the server
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
