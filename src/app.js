"use strict";

const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const query = Object.fromEntries(normalizedURL.searchParams.entries());
  const parts = normalizedURL.pathname.slice(1).split("/");

  res.end(
    JSON.stringify({
      parts,
      query,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
