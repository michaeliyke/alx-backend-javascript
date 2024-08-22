const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Tests for SUM operation
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    assert.strictEqual(calculateNumber('SUM', -5, 10), 5);
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
  });

  // Tests for SUBTRACT operation
  it('should return the difference of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 10, -5), 15);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 4);
  });

  // Tests for DIVIDE operation
  it('should return the quotient of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    assert.strictEqual(calculateNumber('DIVIDE', -10, 5), -2);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 5, 2.2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 2.7, 1.4), 3);
  });

  // Edge case for dividing by zero
  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  // Edge case for invalid operation type
  it('should throw an error for an invalid operation type', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid operation type/);
  });
});
