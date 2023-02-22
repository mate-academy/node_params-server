'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

function getSearchParams(searchParams) {
  return [...searchParams.keys()].reduce((acc, key) => {
    const args = searchParams.getAll(key);

    return {
      ...acc,
      [key]: args.length === 1
        ? args[0]
        : args,
    };
  }, {});
}

const server = http.createServer((req, res) => {
  const normalizeURL = new URL(req.url, `http://${req.headers.host}`);

  const result = {
    parts: normalizeURL.pathname.slice(1).split('/'),
    query: getSearchParams(normalizeURL.searchParams),
  };

  res.end(JSON.stringify(result));
});

server.listen(PORT, (error) => {
  if (!error) {
    // eslint-disable-next-line no-console
    console.log(`server run on http://localhost:${PORT}`);
  } else {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});
