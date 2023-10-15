/* eslint-disable no-console */
'use strict';

const express = require('express');
const setupRoutes = require('./routes');
const app = express();
const port = 3000;

setupRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
