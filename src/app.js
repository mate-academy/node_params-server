'use strict';

const express = require('express');

const PORT = 5000;

const app = express();

app.get('*', (req, res) => {
  const parts = req.path.split('/').filter(Boolean);
  const query = req.query;
  const params = {
    parts,
    query,
  };

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ ...params }, null, 2));
});

app.listen(PORT, () => {
  global.console.log(`Server is launched on port: ${PORT}`);
});
