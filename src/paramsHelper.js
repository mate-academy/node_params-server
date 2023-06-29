'use strict';

const createPathArray = (pathArray) => {
  const sliced = pathArray.slice(1).split('/');

  return sliced;
};

const createParamsObj = (searchParams) => {
  const searchParamsEntries = Object.fromEntries(searchParams.entries());

  return searchParamsEntries;
};

module.exports.createPathArray = createPathArray;
module.exports.createParamsObj = createParamsObj;
