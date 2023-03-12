'use strict';

function getQuery(searchParams) {
  const query = {};

  searchParams.forEach((value, key) => {
    if (!query[key]) {
      query[key] = value;
    } else {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]];
      }
      query[key].push(value);
    }
  });
};

module.exports = {
  getQuery,
};
