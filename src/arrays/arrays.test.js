const calculateNumsBetweenZeroAndTen = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  var sum = 0;
  arr.map((el) => {
    if (el > 0 && el < 10) {
      sum += el;
    }
  });

  return sum;
};

describe("calculate sum of numbers in array which higher than 0 and lower than 10", () => {
  it("should return 0", () => {
    expect(calculateNumsBetweenZeroAndTen([])).toBe(0);
  });

  it("should return 14", () => {
    expect(calculateNumsBetweenZeroAndTen([1, -1, 5, -5, 10, 12, 8])).toBe(14);
  });
});
