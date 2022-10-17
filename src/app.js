/* eslint-disable no-console */
import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  const data = {
    parts: url.pathname
      .slice(1)
      .split('/'),
  };

  const params = Object.fromEntries(url.searchParams.entries());

  data['query'] = params;

  console.log(data);

  response.end();
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
