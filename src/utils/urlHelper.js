'use strict';

const getPathParts = (path) => {
  if (!path) {
    return [];
  }

  return path
    .split('/')
    .map(part => part.replace(/\//g, ''))
    .filter(part => part);
};

const getQueryParams = (queryParams) => {
  if (!queryParams) {
    return {};
  }

  const queryParamsObj = { };

  for (const [key, value] of queryParams.entries()) {
    if (queryParamsObj[key] !== undefined) {
      if (!Array.isArray(queryParamsObj[key])) {
        queryParamsObj[key] = [queryParamsObj[key]];
      }

      queryParamsObj[key].push(value);
      continue;
    }

    queryParamsObj[key] = value;
  }

  return queryParamsObj;
};

module.exports = {
  getPathParts,
  getQueryParams,
};
