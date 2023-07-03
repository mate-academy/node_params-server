'use strict';

const http = require('http');

const createServer = () => {
  const PORT = process.env.PORT || 8000;

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = normalizedUrl.pathname.split('/').filter(i => i !== '');
    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    res.statusCode = 200;

    res.write(JSON.stringify({
      parts, query,
    }));

    res.end();
  });

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

createServer();

module.exports = { createServer };
