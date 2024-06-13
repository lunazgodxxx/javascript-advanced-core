'use strict'

const isDuplicated = (array) => {
  return new Set(array).size !== array.length
}

describe('isDuplicated', () => {
  it('should return true if the array has duplicates', () => {
    expect(isDuplicated([1, 2, 3, 4, 5, 6, 6])).toBe(true);
  });

  it('should return false if the array has no duplicates', () => {
    expect(isDuplicated([1, 2, 3, 4, 5, 6])).toBe(false);
  });
});