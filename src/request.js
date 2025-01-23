const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5701,
  // path: '/',
  path: '/hello//world//123',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
});

req.on('error', (e) => {
  // eslint-disable-next-line no-console
  console.error(`Problem with request: ${e.message}`);
});

req.end();
