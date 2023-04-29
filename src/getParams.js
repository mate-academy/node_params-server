'use strict';

const getParams = (url) => {
  const [path, inputSearchParams] = url.split('?');

  const pathParams = path.slice(1).split('/');

  const searchParams = new URLSearchParams(inputSearchParams);
  const searchParamsNames = inputSearchParams
    .split('&')
    .map(searchParam => searchParam.split('=')[0]);
  const uniqueSearchParamsNames = Array.from(new Set(searchParamsNames));

  const searchParamsEcho = {};

  for (const name of uniqueSearchParamsNames) {
    const params = searchParams.getAll(name);

    if (params.length > 1) {
      searchParamsEcho[name] = params;

      continue;
    }

    searchParamsEcho[name] = searchParams.get(name);
  }

  return {
    parts: pathParams,
    query: searchParamsEcho,
  };
};

module.exports = {
  getParams,
};
