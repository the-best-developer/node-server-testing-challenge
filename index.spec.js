const request = require('supertest');
const server = require('./index.js'); 

describe('index.js', () => {
describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const response = await request(server).get('/');
      expect(response.status).toEqual(200);
    });

    it('should return a JSON object fron the index route', async () => {
      const response = await request(server).get('/');
      expect(response.body).toEqual({message: "hey!!"});
    });

    it('should return a JSON object fron the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json');
    });
  });
});