/* eslint-disable no-console */
"use strict";

const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const normalizedUrl = new URL(request.url, `http://localhost:${PORT}`);

  const parts = normalizedUrl.pathname.slice(1).split("/");
  const query = Object.fromEntries(normalizedUrl.searchParams.entries());

  const result = {
    parts,
    query,
  };

  response.statusCode = 200;
  response.write(JSON.stringify(result));
  response.end();
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
