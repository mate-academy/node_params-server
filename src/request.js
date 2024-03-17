/* eslint-disable no-console */
const axios = require('axios');

axios
  .get('http://localhost:5701/hello/world/123?x=1&y=2')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
