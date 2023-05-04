'use strict';

const getParams = (url) => {
  const [path, inputSearchParams] = url.split('?');

  const pathParams = path.slice(1).split('/');
  const searchParams = new URLSearchParams(inputSearchParams);
  const searchParamsKeys = searchParams.keys();
  const uniqueSearchParamsKeys = Array.from(new Set(searchParamsKeys));

  const searchParamsEcho = {};

  for (const name of uniqueSearchParamsKeys) {
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
