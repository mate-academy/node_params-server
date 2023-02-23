/* eslint-disable no-console */
'use strict';

const getQuery = (params) => {
  const query = {};

  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      query[key] = params.getAll(key);
    } else {
      query[key] = params.get(key);
    }
  }

  return query;
};

module.exports = {
  getQuery,
};
