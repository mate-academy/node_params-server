'use strict';

const app = require('express')();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  const normalizedUrl = new URL(req.url, `https://${req.headers.host}`);

  const getParam = param => ({
    [param]: (normalizedUrl.search.match(RegExp(param, 'g')) || []).length > 1
      ? normalizedUrl.searchParams.getAll(param)
      : normalizedUrl.searchParams.get(param),
  });

  if (!normalizedUrl.search) {
    res.send('No params');
    next();
  }

  res.json(normalizedUrl.search.slice(1)
    .split('&')
    .map(entry => entry.split('=')[0])
    .reduce((acc, curr) => ({
      ...acc,
      parts: normalizedUrl.pathname.slice(1).split('/'),
      query: {
        ...acc.query,
        ...getParam(curr),
      },
    }), {}));

  next();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Running on port ', port);
});
