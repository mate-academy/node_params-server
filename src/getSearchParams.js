const getSearchParams = (url) => {
  const searchParams = url.searchParams;
  const params = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

module.exports = {
  getSearchParams,
};
