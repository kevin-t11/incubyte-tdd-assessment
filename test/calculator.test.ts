import { add } from "../src/calculator";

describe("Calculator", () => {
  /* base test case for empty string */
  test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  /* Test for invalid input with non-numeric characters/mixed number with characters */
  test("Throw InvalidInputError for invalid input", () => {
    expect(() => add("abcd")).toThrow("Invalid number format: 'abcd'");
    expect(() => add("1,2,abc")).toThrow("Invalid number format: 'abc'");
    expect(() => add("10,20,a30")).toThrow("Invalid number format: 'a30'");
    expect(() => add("1,2,3abc")).toThrow("Invalid number format: '3abc'");
    expect(() => add("1\n2\n3a")).toThrow("Invalid number format: '3a'");
  });
});
