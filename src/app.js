const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const data = {
    parts: normalizedURL.pathname.slice(1).split('/'),
    params: Object.fromEntries(normalizedURL.searchParams.entries()),
  };

  const params = Object.fromEntries(normalizedURL.searchParams.entries());

  data.query = params;

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`); // eslint-disable-line no-console
});
