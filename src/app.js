'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const getDefaultResponse = () => {
  return '<h1>Welcome!</h1>'
    + '<p>This server application creates  and returns JSON from URL</p>'
    + '<p>Write your URL in search bar and get your JSON!</p>';
};

const getUrlResponse = (normilizedPath, normilizedURL) => {
  const parts = normilizedPath.split('/');
  const query = {};

  for (const key of normilizedURL.searchParams.keys()) {
    if (!query[key]) {
      query[key] = normilizedURL.searchParams.getAll(key);
    }
  }

  return JSON.stringify({
    parts,
    query,
  });
};

const server = http.createServer((req, res) => {
  const normilizedURL = new URL(req.url, `http://${req.headers.host}`);
  const normilizedPath = normilizedURL.pathname.slice(1);

  if (!normilizedPath) {
    const response = getDefaultResponse();

    res.setHeader('Content-Type', 'text/html');
    res.end(response);
  } else if (normilizedPath !== 'favicon.ico') {
    const response = getUrlResponse(normilizedPath, normilizedURL);

    res.setHeader('Content-Type', 'application/json');
    res.end(response);
  } else {
    res.end();
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
