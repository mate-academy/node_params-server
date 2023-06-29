'use strict';

const createPathArray = (pathArray) => {
  const sliced = pathArray.slice(1).split('/');

  return sliced;
};

const readParam = (string) => {
  const resultObject = {};
  const splitted = string.split('?');
  const path = splitted[0];
  const params = splitted[1];
  const searchParams = new URLSearchParams(params);
  const searchParamsEntries = Object.fromEntries(searchParams.entries());

  resultObject.parts = createPathArray(path);

  resultObject.query = {
    ...searchParamsEntries,
  };

  return resultObject;
};

module.exports = { readParam };
