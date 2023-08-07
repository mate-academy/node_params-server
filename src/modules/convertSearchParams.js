'use strict';

const convertParamsToObject = (searchQuery) => {
  const search = new URLSearchParams(searchQuery);

  const searchParams = {};

  search.forEach((value, key) => {
    const allValues = search.getAll(key);

    searchParams[key] = allValues.length > 1
      ? allValues
      : value;
  });

  return searchParams;
};

module.exports = { convertParamsToObject };
