const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const assert = require("assert");
const { calculateNumber } = require("./utils");
const { expect } = require('chai');


describe('sendPaymentRequestToApi', () => {
  describe('Using sinon', () => {
    it('should call Utils.calculateNumber with "SUM", 100, and 20', function () {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);

      sinon.assert.calledWith(spy, 'SUM', 100, 20);
      spy.restore();
    });

  });

  describe('sendPaymentRequestToApi', function () {
    let consoleSpy, calculateNumberStub;

    beforeEach(function () {
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
      consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      calculateNumberStub.restore();
      consoleSpy.restore();
    });

    it('should call calculateNumber with SUM, 100, and 20', function () {
      sendPaymentRequestToApi(100, 20); // 10 cos we stubbed it earlier
      expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });

    it('logs to the console the right messages', () => {
      sendPaymentRequestToApi(100, 20);
      sendPaymentRequestToApi(100, 131)
      sendPaymentRequestToApi(100.3, 131.3)
      sendPaymentRequestToApi(100.6, 131.3)
      sendPaymentRequestToApi(100.3, 131.6)
      sendPaymentRequestToApi(100.6, 131.6)

      // 'The total is: 10' should be logged 6 times
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
  });

  describe('when type is SUM', () => {
    it('it round the first argument', () => {
      assert.equal(calculateNumber('SUM', 1.0, 0), 1);
      assert.equal(calculateNumber('SUM', 1.3, 0), 1);
      assert.equal(calculateNumber('SUM', 1.7, 0), 2);
    });

    it('it round the second argument', () => {
      assert.equal(calculateNumber('SUM', 0, 1.0), 1);
      assert.equal(calculateNumber('SUM', 0, 1.3), 1);
      assert.equal(calculateNumber('SUM', 0, 1.7), 2);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber('SUM', 1.3, 0), 1);
      assert.equal(calculateNumber('SUM', 0, 1.2), 1);
      assert.equal(calculateNumber('SUM', 1.3, 1.3), 2);
      assert.equal(calculateNumber('SUM', 1.7, 1.2), 3);
      assert.equal(calculateNumber('SUM', 1.3, 1.8), 3);
      assert.equal(calculateNumber('SUM', 1.6, 1.8), 4);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('it round the first argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.0, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.7, 0), 2);
    });

    it('it round the second argument', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 1.0), -1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.3), -1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.7), -2);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
      assert.equal(calculateNumber('SUBTRACT', 0, 1.2), -1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
      assert.equal(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
      assert.equal(calculateNumber('SUBTRACT', 1.6, 1.8), 0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
      assert.equal(calculateNumber('DIVIDE', 10.0, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });

    it('it round the second argument', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
      assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
      assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });
});
