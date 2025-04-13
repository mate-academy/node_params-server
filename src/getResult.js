const getResult = (arg1, arg2) => {
  let path;
  const query = {};

  const result = {};

  if (arg1) {
    path = arg1.split('/').filter((content) => content !== '');
  }

  if (arg2) {
    const params = new URLSearchParams(arg2);

    params.forEach((value, key) => {
      query[key] = value;
    });
  }

  if (path) {
    result.parts = path;
    result.query = query;
  }

  if (Object.keys(result).length > 0) {
    return result;
  }
};

module.exports = {
  getResult,
};
