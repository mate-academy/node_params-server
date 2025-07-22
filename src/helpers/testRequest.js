/* eslint-disable no-console */

const http = require('node:http');

const options = {
  hostname: 'localhost',
  port: 5701,
  // path: '//123?sex=male&age=25&age=40',
  // path: '//123/one/two/three?sex=male&age=25&age=40&x=&y=&=0',
  // path: '/test',
  // path: '?param1=&param2=',
};

http.get(options, (res) => {
  res.setEncoding('utf8');
  console.log(res.statusCode);
  res.on('data', console.log);
});
