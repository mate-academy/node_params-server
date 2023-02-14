'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    const normalizeURL = new URL(`http://${req.headers.host}${req.url}`);
    const parts = normalizeURL.pathname.slice(1).split('/');
    const query = Object.fromEntries(normalizeURL.searchParams.entries());

    res.write(JSON.stringify({
      parts,
      query,
    }));

    res.end();
  } catch (err) {
    res.statusCode = 400;
    res.end('Invalid URL');
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
