const getPathnameParts = (path) => {
  return path.split('/').filter((part) => part);
};

module.exports = {
  getPathnameParts,
};
