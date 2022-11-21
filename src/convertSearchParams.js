'use strict';

function convertSearchParams(params) {
  const currentUrlSearchParams = new URLSearchParams(params);
  const query = Object.fromEntries(currentUrlSearchParams.entries());

  for (const key in query) {
    const allValues = currentUrlSearchParams.getAll(key);

    if (allValues.length > 1) {
      query[key] = allValues;
    }
  }

  return query;
}

module.exports = { convertSearchParams };
