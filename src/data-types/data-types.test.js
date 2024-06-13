const calculateDigits = (num) => {
  if (typeof num !== "number") {
    return 0;
  }

  return String(num).length;
};

describe("calculateDigits", () => {
  it("should return 0 if the input is not a number", () => {
    expect(calculateDigits("Hello World")).toBe(0);
  });

  it("should return 7 from number 1324576", () => {
    expect(calculateDigits(1324576)).toBe(7);
  });
});
