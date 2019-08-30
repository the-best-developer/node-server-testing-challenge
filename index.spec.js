const request = require('supertest');
const server = require('./index.js'); 

// Describing index.js endpoints
describe('index.js', () => {

  // POST endpoint
  describe('POST /', () => {
    it('should return a 200 status', async () => {
      const response = await request(server)
      .post('/')
      .send({name: "Lord of the flies", desc: "Children shipwreak on an island"})
      expect(response.status).toEqual(201);
    });

    it('should return a object from the / endpoint', async () => {
      const response = await request(server)
      .post('/')
      .send({name: "Lord of the flies", desc: "Children shipwreak on an island"})
      expect(typeof response.body).toEqual('object');
    });
  });

  // DELETE endpoint
  describe('DELETE /', () => {
    it('should return a 200 status', async () => {
      const response = await request(server)
      .delete('/')
      .send("1")
      expect(response.status).toEqual(201);
    });

    it('should return the deleted object from the / endpoint', async () => {
      const response = await request(server)
      .delete('/')
      .send(1)
      expect(typeof response.body).toEqual('object');
    });
  });
});