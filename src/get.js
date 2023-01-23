'use strict';

const axios = require('axios');

const path = 'http://localhost:3000/hello/world/123?x=1&search=some';

axios.get(path);
