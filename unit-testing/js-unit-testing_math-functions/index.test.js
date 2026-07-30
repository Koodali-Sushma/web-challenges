import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("return 5 if called add(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5); // 2+3=5
});

test("return negative number if called add(-5,-2)", () => {
  const result = add(-5, -2);
  expect(result).toBeLessThan(0); // (-5) + (-2) = negative number
});

test("return a value close to 0.3 if called add(0.1,0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3); // 0.1 + 0.2 =  check sum close to 0.3
});

test("return 10 if called subtract(15,5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10); // 15 - 5 = 10
});

test("return negative no. if called subtract(1,5)", () => {
  const result = subtract(1, 5);
  expect(result).toBeLessThan(0); // 1 - 5 = -4 negative number
});

test("return 8 if called multiply(2,4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8); // 2 X 4 = 8
});

test("sign cases matrix", () => {
  // Only first argument negative -> negative
  expect(multiply(-5, 2)).toBeLessThan(0);

  // Only second argument negative -> negative
  expect(multiply(5, -2)).toBeLessThan(0);

  // Both positive -> positive
  expect(multiply(5, 2)).toBeGreaterThan(0);

  // Both negative -> positive
  expect(multiply(-5, -2)).toBeGreaterThan(0);
});

test("return 3 if called divide(9,3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3); // 9 / 3 = 3
});

test("return 'You should not do this!' if called divide(9,0)", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!"); // divide by zero
});
