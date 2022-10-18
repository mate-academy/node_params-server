/* eslint-disable strict */
/* eslint-disable no-console */

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

  const data = {
    parts: normalizedUrl.pathname.slice(1).split('/'),
    query: Object.fromEntries(normalizedUrl.searchParams.entries()),
  };

  console.log(JSON.stringify(data));

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
