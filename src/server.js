'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathParts = url.pathname.slice(1).split('/');
  const searchQuery = Object.fromEntries(url.searchParams);

  const result = {
    'parts': pathParts,
    'query': searchQuery,
  };

  res.end(JSON.stringify(result));

  return result;
});

// Enables the server
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
