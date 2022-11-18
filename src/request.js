'use strict';

const axios = require('axios');

const href = 'http://localhost:8080/animal/talk?cat=miav&dog=hav';

axios.get(href)
  // eslint-disable-next-line no-console
  .catch(() => console.log('error'));
