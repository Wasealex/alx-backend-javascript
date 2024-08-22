const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floats to whole number', () => {
    assert.strictEqual(calculateNumber(6.0, 5.0), 11);
  });

  it('rounds down numbers', () => {
    assert.strictEqual(calculateNumber(3.4, 4.4), 7);
  });

  it('rounds up numbers', () => {
    assert.strictEqual(calculateNumber(3.6, 4.6), 9);
  });

  it('rounds down the first number and rounds up the second', () => {
    assert.strictEqual(calculateNumber(3.4, 4.6), 8);
  });
  it('trialling numbers of float numbers rounding up/down', () => {
    assert.strictEqual(calculateNumber(3.4666666, 4.6666666), 8);
  });
});
