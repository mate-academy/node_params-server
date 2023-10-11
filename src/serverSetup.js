'use strict';

const PORT = process.env.PORT || 8080;
const serverLink = `http://localhost:${PORT}`;

module.exports = {
  PORT,
  serverLink,
};
