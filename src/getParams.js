function getParams(params) {
  const queryParams = {};

  for (const value of params.keys()) {
    queryParams[value] = params.get(value);

    if (params.getAll(value).length > 1) {
      queryParams[value] = params.getAll(value);
    }
  }

  return queryParams;
}

module.exports = { getParams };
