'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.slice(1).split('/');

  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const result = {
    parts,
    query,
  };

  res.write('Yor URL now is contains this JSON: \r\n');
  res.end(JSON.stringify(result));
});

// Enables the server
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
