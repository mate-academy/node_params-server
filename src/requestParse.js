function requestParse(url) {
  const [path, search] = url.split('?');
  const parts = path.slice(1).split('/');
  const searchString = search || '';
  const params = new URLSearchParams(searchString);
  const query = Object.fromEntries(params.entries());

  return { parts, query };
}

module.exports = { requestParse };
