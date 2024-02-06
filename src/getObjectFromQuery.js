'use strict';

function getObjectFromQuery(searchParams) {
  const obj = {};

  for (const [key, value] of searchParams) {
    if (obj.hasOwnProperty(key)) {
      Array.isArray(obj[key])
        ? obj[key].push(value)
        : obj[key] = [obj[key], value];
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = { getObjectFromQuery };
