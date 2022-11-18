'use strict';

function getUrlComponents({ url, headers }) {
  const normalizedURL = new URL(url, `http://${headers.host}`);
  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  return {
    parts,
    query,
  };
};

module.exports = { getUrlComponents };
