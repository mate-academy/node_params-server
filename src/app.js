'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(
    req.url, `http://${req.headers.host}`
  );
  const parts = pathname.slice(1).split('/');
  const query = Object.fromEntries(searchParams.entries());
  const result = {
    parts,
    query,
  };

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
