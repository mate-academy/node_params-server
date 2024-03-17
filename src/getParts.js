function getParts(parsed) {
  return parsed
    .slice(7)
    .split('/')
    .map((part) => {
      if (part.includes('?')) {
        const index = part.indexOf('?');
        const fixedPart = part.substring(0, index);

        return fixedPart;
      }

      return part;
    })
    .filter((part) => part !== '');
}

module.exports = getParts;
