/* eslint-disable no-var, prefer-destructuring */
var hexToRgb = window.hexToRgbJquery.hexToRgb;

describe('hex-to-rgb tests', function () {
  describe('when a hex value is passed', function () {
    it('with all six characters a valid corresponding rgb value should be returned', function () {
      hexToRgb('#f1f1f1').should.equal('rgb(241, 241, 241)');
    });

    it('with three characters a valid corresponding rgb value should be returned', function () {
      hexToRgb('#fff').should.equal('rgb(255, 255, 255)');
    });
  });
});
