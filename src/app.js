'use strict';

const app = require('express')();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  const {
    search,
    searchParams: { get, getAll },
    pathname,
  } = new URL(req.url, `https://${req.headers.host}`);

  const getParam = param => ({
    [param]: (search.match(RegExp(param, 'g')) || []).length > 1
      ? getAll(param)
      : get(param),
  });

  if (!search) {
    res.send('No params');
    next();
  }

  res.json(search.slice(1)
    .split('&')
    .map(entry => entry.split('=')[0])
    .reduce((acc, curr) => ({
      ...acc,
      parts: pathname.slice(1).split('/'),
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
