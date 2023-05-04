'use strict';

function parseUrl(url) {
  const urlParts = url.split('?');
  const parts = urlParts[0].slice(1).split('/');
  const params = new URLSearchParams(urlParts[1]);
  const allParamsParts = params.entries();

  let query = {};

  for (const element of allParamsParts) {
    query = {
      ...query,
      [element[0]]: element[1],
    };
  }

  const result = {
    parts,
    query,
  };

  return result;
}

module.exports = { parseUrl };
