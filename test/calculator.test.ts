import { add } from "../src/calculator";

describe("Calculator", () => {
  /* base test case for empty string */
  test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  
  /* test case for invalid input */
  test("throws an error when invalid input is encountered", () => {
    expect(() => add("a,b,c")).toThrow("Invalid input: a, b, c");
    expect(() => add("//[***]\na***b***c")).toThrow("Invalid input: a, b, c");
    expect(() => add("//[|]\na|b|c")).toThrow("Invalid input: a, b, c");
  });
  

  /* test case for sum of only one number */
  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  /*  test case for checking sum of 2 numbers */
  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("4,5")).toBe(9);
  });

  /*  test case for checking sum of multiple numbers separated by commas */
  test("return the sum of multiple numbers separated by commas", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
  });

  /* test case for checking sum of multiple numbers separated by new lines */
  test("return the sum of multiple numbers separated by new lines", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
    expect(add("10\n20\n30\n40")).toBe(100);
  });

  /* test case for custom delimiters */
  test("handle the custom delimiter specified with //", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  /* test case for custom delimiter with regex characters */
  test("handle the custom delimiter with special characters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[|]\n1|2|3")).toBe(6);
  });

  /* test case for negative numbers */
  test("throws an error when a negative number is encountered", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed: -1, -3");
    expect(() => add("//[***]\n-1***2***3")).toThrow("Negative numbers not allowed: -1");
  });

});
