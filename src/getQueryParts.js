const getQueryParts = (params) => {
  return params.split('&').reduce((accum, curr) => {
    const key = curr.split('=')[0];
    const value = curr.split('=')[1];

    if (!accum[key]) {
      accum[key] = value;
    } else {
      throw new Error(
        `Key '${key}' with value '${value}' is already exist in 'query' object`,
      );
    }

    return accum;
  }, {});
};

module.exports = {
  getQueryParts,
};
