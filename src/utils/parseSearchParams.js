'use strict';

function parseSearchParams(params) {
  const query = {};

  for (const [key, value] of params.entries()) {
    if (query[key]) {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]];
      }
      query[key].push(value);
    } else {
      query[key] = value;
    }
  }

  return query;
}

module.exports = {
  parseSearchParams,
};
