function deleteStartDoubleSlash(string) {
  let result = string;

  while (result.startsWith('//')) {
    result = result.slice(1);
  }

  return result;
}

module.exports = {
  deleteStartDoubleSlash,
};
