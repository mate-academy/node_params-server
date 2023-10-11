'use strict';

function getParams(reqURL) {
  const [path, query] = reqURL.slice(1).split('?');
  const params = new URLSearchParams(query);
  const queries = params.entries();
  const parts = path.split('/');

  return {
    parts,
    query: {
      queries,
    },
  };
}

module.exports = {
  getParams,
};
