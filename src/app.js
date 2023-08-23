'use strict';

const http = require('http');
const { URL: NodeURL } = require('url');

const getSearchParams = (searchParams) => {
  const searchParamsObj = {};

  searchParams.forEach((value, key) => {
    searchParamsObj[key] = value;
  });

  return searchParamsObj;
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const newUrl = new NodeURL(req.url, `http://${req.headers.host}`);
  const searchParams = newUrl.searchParams;
  const parts = newUrl.pathname.slice(1).split('/');

  const jsonResponse = {
    'parts': parts[0].length !== 0 ? parts : 'Please provide pathname',
    'query': newUrl.search.length !== 0
      ? getSearchParams(searchParams)
      : 'Please provide search params',
  };

  res.end(JSON.stringify(jsonResponse));
});

server.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('Server started');
});
