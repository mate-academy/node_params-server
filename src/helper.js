module.exports = {
  convertUrlToParams: (url) => {
    const urlParams = url.split('?');
    let parts = [];
    const query = {};

    if (urlParams[0] === '/') {
      return {
        parts,
        query,
      };
    }

    const queries = urlParams[1]?.split('&') || [];

    parts = urlParams[0]?.slice(1)?.split('/') || [];

    queries.forEach(param => {
      const queryParts = param.split('=');

      query[queryParts[0]] = queryParts[1];
    });

    return {
      parts,
      query,
    };
  },
};
