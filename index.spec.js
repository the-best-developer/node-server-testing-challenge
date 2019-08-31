const request = require('supertest');
const server = require('./index.js'); 

// Describing index.js endpoints
describe('index.js', () => {

  describe('GET function on /', () => {
    it('should return a 200 status', async () => {
      const response = await request(server).get('/')
      expect(response.status).toEqual(200);
    });

    it('should return a object from the / endpoint', async () => {
      const response = await request(server).get('/')
      expect(typeof response.body).toEqual('object');
    });
  });

  // POST endpoint on /book
  describe('POST function on /book', () => {
    it('should return a 200 status', async () => {
      const response = await request(server)
      .post('/book')
      .send({book: "Lord of the flies", desc: "Children shipwreak on an island"})
      expect(response.status).toEqual(200);
    });

    it('should return a object from the /book endpoint', async () => {
      const response = await request(server)
      .post('/book')
      .send({book: "Lord of the flies", desc: "Children shipwreak on an island"})
      expect(typeof response.body).toEqual('object');
    });
  });

  // DELETE endpoint on /
  describe('DELETE function on /', () => {
    it('should return a 200 status', async () => {
      const response = await request(server)
      .delete('/book/1')
      expect(response.status).toEqual(200);
    });

    it('should return the deleted object from the / endpoint', async () => {
      const response = await request(server)
      .delete('/book/2')
      expect(!!response.body.message).toEqual(true);
    });
  });
});