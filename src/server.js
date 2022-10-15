/* eslint-disable no-console */
import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const result = {};

  result['parts'] = normalizedUrl.pathname.split('/').slice(1);
  result['query'] = Object.fromEntries(normalizedUrl.searchParams.entries());

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
