/* eslint-disable max-len */
'use strict';

const { Server, Agent } = require('http');
const { createServer } = require('../src/createServer.js');
const axios = require('axios');

// this prevents `socket hang up` for Node.js 20.10+
axios.defaults.httpAgent = new Agent({ keepAlive: false });

const PORT = 5701;
const HOST = `http://localhost:${PORT}`;

describe('Params server', () => {
  describe('createServer', () => {
    describe('basic scenarios', () => {
      it('should create a server', () => {
        expect(createServer).toBeInstanceOf(Function);
      });

      it('should create an instance of Server', async () => {
        expect(createServer()).toBeInstanceOf(Server);
      });
    });

    describe('Server', () => {
      let server;

      beforeEach(() => {
        server = createServer();
        server.listen(PORT);
      });

      afterEach(() => {
        server.close();
      });

      it('should respond with 200 status code if trying to GET "/"', async () => {
        const response = await axios.get(HOST);

        expect(response.status).toBe(200);
      });

      it('should return correct response headers', async () => {
        const response = await axios.get(HOST);

        expect(response.headers['content-type']).toBe('application/json');
      });

      it('should parse pathname and query', async () => {
        const res = await axios.get(HOST + '/hello/world/123?x=1&search=some');

        expect(res.data.parts).toEqual(['hello', 'world', '123']);

        expect(res.data.query).toEqual({
          x: '1',
          search: 'some',
        });
        expect(res.status).toEqual(200);
      });

      it('should handle pathnames with different lengths', async () => {
        const response = await axios.get(HOST + '/a/b/c/d/e/f/g/h/i/j');

        expect(response.data.parts).toEqual([
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
        ]);

        expect(response.status).toEqual(200);
      });

      it('should handle requests with no query parameters', async () => {
        const response = await axios.get(HOST + '/test');

        expect(response.data.query).toEqual({});
        expect(response.status).toEqual(200);
      });

      it('shouold handle requests with multiple query parameters', async () => {
        const response = await axios.get(
          HOST + '/test?param1=value1&param2=value2',
        );

        expect(response.data.query).toEqual({
          param1: 'value1',
          param2: 'value2',
        });
      });

      it('should not omit empty values for query params', async () => {
        const response = await axios.post(HOST + '/test?param1=&param2=');

        expect(response.data.parts).toEqual(['test']);
      });

      it('should not omit empty values for pathname parts', async () => {
        const response = await axios.post(HOST + '?param1=&param2=');

        expect(response.data.query).toEqual({
          param1: '',
          param2: '',
        });
      });
    });
  });
});
