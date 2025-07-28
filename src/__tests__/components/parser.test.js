import grammar from "../../grammar/expression.js";
import parse from "../../utils/parse.js";

describe("Parser", () => {
  test('should return true for the expression "2  + 2 = 4"', () => {
    const input = "2  + 2 = 4";
    const result = parse(grammar, input);
    expect(result.result).toBe(true);
  });

  test('should return true for the expression "3 * (2 + 1) < 10"', () => {
    const input = "3 * (2 + 1) < 10";
    const result = parse(grammar, input);
    expect(result.result).toBe(true);
  });

  test('should return false for the expression "6 < 10 / 2 + 1"', () => {
    const input = "6 < 10 / 2 + 1";
    const result = parse(grammar, input);
    expect(result.result).toBe(false);
  });

  test('should return true for the expression "12 + 3 != 4 / 2 + 5"', () => {
    const input = "12 + 3 != 4 / 2 + 5";
    const result = parse(grammar, input);
    expect(result.result).toBe(true);
  });

  test('should return true for the expression "10 / 2 != 6"', () => {
    const input = "10 / 2 != 6";
    const result = parse(grammar, input);
    expect(result.result).toBe(true);
  });

  test('should return true for the expression "(2 + 3) * 2 = 10"', () => {
    const input = "(2 + 3) * 2 = 10";
    const result = parse(grammar, input);
    expect(result.result).toBe(true);
  });

  test('should return false for the expression "2 * (3 + 4) > 14"', () => {
    const input = "2 * (3 + 4) > 14";
    const result = parse(grammar, input);
    expect(result.result).toBe(false);
  });

});
