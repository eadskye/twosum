'use strict';
const twoSums = require('../index.js');
var expect = require('chai').expect;

describe("twoSums", () => {
  it("should output two items in the array that, when added together, give the target value", () => {
    expect(twoSums([1, 2, 3, 4, 5, 6, 7], 13)).to.deep.equal([5,6]);
    expect(twoSums([1,2,3,4],5)).to.deep.equal([1,2]);
  });
});

  describe("is a valid function", () => {
  it("should be a valid function", () => {
    expect(typeof twoSums, 'function');
  });
});
