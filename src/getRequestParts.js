const getRequestParts = (url) => {
  const pathname = url.pathname;
  const queries = url.searchParams.entries();

  return {
    pathname,
    queries,
  };
};

module.exports = {
  getRequestParts,
};
