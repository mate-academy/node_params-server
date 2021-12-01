import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const indexOfFirstSearchParam = req.url.indexOf('?');
  const params = req.url.slice(1, indexOfFirstSearchParam).split('/');

  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const result = {};
  result.params = params;
  result.query = query;

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
