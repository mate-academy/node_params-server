'use strict';

const setUpRoutes = (app) => {
  app.get('*', (req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);

    const parts = myURL.pathname.split('/').slice(1);

    const query = Object.fromEntries(myURL.searchParams);

    res.json({
      parts,
      query,
    });
  });
};

module.exports = setUpRoutes;
