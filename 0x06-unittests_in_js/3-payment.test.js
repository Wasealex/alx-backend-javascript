const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses Utils.calculateNumber', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 50);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 50)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
