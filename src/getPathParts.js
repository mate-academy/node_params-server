const getPathParts = (url) => url.pathname.split('/').filter(Boolean);

module.exports = { getPathParts };
