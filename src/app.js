'use strict';

const http = require('http');
const PORT = 3000;

const main = () => {
  const server = http.createServer((req, res) => {
    const {
      pathname,
      searchParams,
    } = new URL(req.url, `http://${req.headers.host}`);
    const parts = pathname.split('/');

    parts.shift();

    const query = Object.fromEntries(searchParams.entries());

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
      parts,
      query,
    }));
  });

  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server is running on http//localhost:${PORT}`);
  });
};

main();

module.exports = { main };
