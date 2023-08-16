'use strict';

const { paramsServer } = require('./paramsServer');

paramsServer().listen(5700, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});
