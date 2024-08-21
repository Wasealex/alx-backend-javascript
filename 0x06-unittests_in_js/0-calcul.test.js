const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floats to whole number', () => {
    assert.strictEqual(calculateNumber(6.0, 5.0), 11);
  });
});
