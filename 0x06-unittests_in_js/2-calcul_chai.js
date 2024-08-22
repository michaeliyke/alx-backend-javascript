function round(n) {
  if (isNaN(n)) {
    return NaN;
  }
  if (n < 0) {
    // Both Math.floor and Math.round are very sick!
    // Math.floor(4.3) is 4, Math.floor(4.8) is 4
    // Math.floor(-4.2) is -5, Math.floor(-4.8) is -5
    // --
    // Math.round(4.2) is 4, Math.round(4.8) is 5
    // Math.round(-4.2) is -4, Math.round(-4.5) is -4, Math.round(-4.6) is -5
    return Math.round(Math.abs(n)) * -1;
  }
  return Math.round(n);
}

function calculateNumber(type, x, y) {
  const a = round(x);
  const b = round(y);

  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    } else {
      return round(a / b);
    }
  } else {
    throw new Error(
      'Invalid operation type: ' +
      'Type must be SUM, SUBTRACT or DIVIDE');
  }
}

module.exports = calculateNumber;
