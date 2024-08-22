const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {
    it('adding positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 4.0)).to.equal(6);
    });
  });
});

describe('calculateNumber', () => {
  describe('type === "SUBTRACT"', () => {
    it('subtracting positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 1.0)).to.equal(1);
    });
  });
});

describe('calculateNumber', () => {
  describe('type === "DIVIDE"', () => {
    it('divide postive non zero numbers', () => {
      expect(calculateNumber('DIVIDE', 6.0, 3.0)).to.equal(2);
    });
    it('divide postive zero numbers', () => {
	  expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
