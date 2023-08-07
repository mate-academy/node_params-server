'use strict';

const getPathnameParts = (pathname) => {
  const normalizedPath = pathname.slice(1);

  return normalizedPath
    ? normalizedPath.split('/')
    : [];
};

module.exports = { getPathnameParts };
