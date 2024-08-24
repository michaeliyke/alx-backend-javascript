const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the payment token when the API call is successful', (done) => {
    getPaymentTokenFromAPI(true)
      .then((paymentToken) => {
        expect(paymentToken).to.eql({ data: 'Successful response from the API' });
        // expect(paymentToken).to.be.an('object');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
