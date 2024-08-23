function round(n) {
  if (isNaN(n)) {
    return NaN;
  }
  return n < 0 ? Math.ceil(n - 0.5) : Math.round(n);
}


const Utils = {
  calculateNumber(type, x, y) {
    const a = round(x);
    const b = round(y);

    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) return 'Error';
        return round(a / b);
      default:
        throw new Error(
          'Invalid operation type: Type must be SUM, SUBTRACT, or DIVIDE');
    }
  }

};

module.exports = Utils;
