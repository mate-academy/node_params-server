'use strict';

const urlParser = (req) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const text = normalizedURL.pathname.slice(1);
  const querys = Object.fromEntries(normalizedURL.searchParams.entries());

  const result = {
    parts: text ? text.split('/') : [],
    query: querys,
  };

  return result;
};

module.exports = {
  urlParser,
};
