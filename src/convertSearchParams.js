'use strict';

function convertSearchParams(params) {
  const query = {};

  params.split('&').forEach(req => {
    const key = decodeURIComponent(req.split('=')[0]);
    const value = decodeURIComponent(req.split('=')[1]);

    if (query.hasOwnProperty(key)) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        const valueInArray = [query[key], value];

        query[key] = valueInArray;
      }
    } else {
      query[key] = value;
    }
  });

  return query;
}

module.exports = { convertSearchParams };
