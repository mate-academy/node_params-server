'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  const parts = parsedUrl.pathname.split('/').filter(Boolean);
  const query = Object.fromEntries(parsedUrl.searchParams);

  const response = {
    parts,
    query
  }

  res.end(JSON.stringify(response));
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
