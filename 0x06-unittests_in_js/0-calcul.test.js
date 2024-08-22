const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return 15 when adding 5 and 10', function () {
    assert.strictEqual(calculateNumber(5, 10), 15);
  });

  it('should return -15 when adding -5 and -10', function () {
    assert.strictEqual(calculateNumber(-5, -10), -15);
  });

  it('should return -5 when adding 5 and -10', function () {
    assert.strictEqual(calculateNumber(5, -10), -5);
  });

  it('should return 10 when adding 0 and 10', function () {
    assert.strictEqual(calculateNumber(0, 10), 10);
  });

  it('should return -10 when adding 0 and -10', function () {
    assert.strictEqual(calculateNumber(0, -10), -10);
  });

  it('should return 0 when adding 0 and 0', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  // Edge case 1: Large numbers
  it('should correctly add large numbers', function () {
    assert.strictEqual(calculateNumber(1e9, 1e9), 2e9);
  });

  // Edge case 2: Very small fractional numbers
  it('should round and add very small fractional numbers', function () {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  // Edge case 3: Numbers exactly at the rounding boundary
  it('should correctly round numbers at the 0.5 boundary', function () {
    assert.strictEqual(calculateNumber(0.5, 1.5), 3);
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });

  // Edge case 4: Mixed positive and negative fractional numbers
  it('should handle mixed positive and negative fractional numbers', function () {
    assert.strictEqual(calculateNumber(1.4, -1.6), -1);
  });

  // Edge case 5: Handling NaN inputs
  it('should return NaN when either input is NaN', function () {
    assert.ok(isNaN(calculateNumber(NaN, 1)));
    assert.ok(isNaN(calculateNumber(1, NaN)));
    assert.ok(isNaN(calculateNumber(NaN, NaN)));
  });

  // Edge case 6: Handling Infinity and -Infinity
  it('should return Infinity when adding positive Infinity to any number', function () {
    assert.strictEqual(calculateNumber(Infinity, 1), Infinity);
    assert.strictEqual(calculateNumber(1, Infinity), Infinity);
  });

  it('should return -Infinity when adding negative Infinity to any number', function () {
    assert.strictEqual(calculateNumber(-Infinity, -1), -Infinity);
    assert.strictEqual(calculateNumber(-1, -Infinity), -Infinity);
  });

  it('should return NaN when adding Infinity and -Infinity', function () {
    assert.ok(isNaN(calculateNumber(Infinity, -Infinity)));
  });

  // Edge case 7: Non-numeric inputs (assuming the function is not designed to handle them)
  it('should throw an error when non-numeric inputs are provided', function () {
    assert.throws(() => calculateNumber('a', 1), TypeError);
    assert.throws(() => calculateNumber(1, 'b'), TypeError);
    assert.throws(() => calculateNumber('a', 'b'), TypeError);
  });
});
