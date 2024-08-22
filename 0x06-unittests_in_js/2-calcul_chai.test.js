const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  // Tests for SUM operation
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    expect(calculateNumber('SUM', -5, 10)).to.equal(5);
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-6);
  });

  // Tests for SUBTRACT operation
  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 10, -5)).to.equal(15);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(4);
  });

  // Tests for DIVIDE operation
  it('should return the quotient of two numbers', () => {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    expect(calculateNumber('DIVIDE', -10, 5)).to.equal(-2);
    expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
    expect(calculateNumber('DIVIDE', 5, 2.2)).to.equal(3);
    expect(calculateNumber('DIVIDE', 2.7, 1.4)).to.equal(3);
  });

  // Edge case for dividing by zero
  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  // Edge case for invalid operation type
  it('should throw an error for an invalid operation type', () => {
    expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw('Invalid operation type');
  });
});
