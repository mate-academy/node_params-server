function parseUrl(req) {
  const parsedUrl = new URL(req.url, 'http://localhost:5700');
  const searchParams = parsedUrl.searchParams;
  const query = Object.fromEntries(searchParams.entries());
  const parts = req.url
    .split('?')[0]
    .split('/')
    .filter((part) => !!part.length);

  return { query, parts };
}

function sendResponse(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
}

module.exports = {
  parseUrl,
  sendResponse,
};
