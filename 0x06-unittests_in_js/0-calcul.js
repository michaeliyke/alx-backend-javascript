#!/usr/bin/env node

function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError("Both parameters must be numbers");
  }
  // CRITICAl DECISION: We round before adding
  // to address the 0.5 issue definitively
  // Here 0.5 +1 .5 is 3 not 2 and 1.5 + 1.5 is 4 not 3
  const result = Math.round(a) + Math.round(b);
  return result === 0 ? 0 : result;
};

module.exports = calculateNumber;
