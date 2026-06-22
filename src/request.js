/* eslint-disable no-console */
const axios = require('axios');

const BASE = 'http://localhost:5701';

const href = BASE + '/hello/world/123?x=1&search=some';

console.log(href);

axios
  .get(href)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
