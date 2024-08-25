const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  const baseURL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(`${baseURL}/`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(`${baseURL}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 for non-existent route', (done) => {
    request.get(`${baseURL}/nonexistent`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
