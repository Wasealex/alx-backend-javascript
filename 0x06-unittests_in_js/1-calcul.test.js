const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {
    it('adding positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 4.0), 6);
    });
  });
});

describe('calculateNumber', () => {
  describe('type === "SUBTRACT"', () => {
    it('subtracting positive numbers', () => {
	    assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 1.0), 1);
    });
  });
});

describe('calculateNumber', () => {
  describe('type === "DIVIDE"', () => {
    it('divide postive non zero numbers', () => {
	    assert.strictEqual(calculateNumber('DIVIDE', 6.0, 3.0), 2);
    });
      it('divide postive zero numbers', () => {
	  assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error')
      })
  });
});
