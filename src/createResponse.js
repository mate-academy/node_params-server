const createResponse = (pathname, queries) => {
  return JSON.stringify({
    parts: pathname.split('/').filter((el) => el),
    query: Object.fromEntries(queries),
  });
};

module.exports = {
  createResponse,
};
