'use strict';
/* eslint-disable no-console */

const http = require('http');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const params = Object.fromEntries(normalizedURL.searchParams.entries());
  const pathNameArr = normalizedURL.pathname.split('/').slice(1);

  console.log(`params: ${params}`);
  console.log(`pathNameArr: ${pathNameArr}`);

  const resObj = {
    parts: pathNameArr,
    query: params,
  };

  const resObjJSON = JSON.stringify(resObj);

  res.end(resObjJSON);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
