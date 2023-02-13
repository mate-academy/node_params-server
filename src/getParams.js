'use strict';

function getParams(params) {
  const obj = {};

  for (const [key, value] of params.entries()) {
    obj[key] = value;

    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    }
  }

  return obj;
};

module.exports = {
  getParams,
};
