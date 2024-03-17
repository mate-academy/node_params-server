function getQueryParams(req) {
  const queryParams = {};

  if (req.url.includes('?')) {
    const query = new URLSearchParams(req.url.slice(req.url.indexOf('?')));

    for (const [key, value] of query) {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = getQueryParams;
