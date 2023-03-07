'use strict';

function normalizeSearchParams(searchParams) {
  const splitedSearchParams = searchParams.split('&');
  const normalizedSearchParams = {};

  for (let i = 0; i < splitedSearchParams.length; i++) {
    const [key, value] = splitedSearchParams[i].split('=');

    if (Object.prototype.hasOwnProperty.call(normalizedSearchParams, key)) {
      normalizedSearchParams[key] = [
        ...normalizedSearchParams[key],
        value,
      ];
    } else {
      normalizedSearchParams[key] = value;
    }
  }

  return normalizedSearchParams;
}

module.exports = {
  normalizeSearchParams,
};
