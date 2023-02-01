'use strict';

function getResObj(searchParamsObject, searchParams) {
  const resObj = {};

  Object.keys(searchParamsObject).forEach(key => {
    const allValues = searchParams.getAll(key);

    resObj[key] = allValues.length > 1 ? allValues : allValues[0];
  });

  return resObj;
}

module.exports = {
  getResObj,
};
