import { expect, test } from "vitest";
import { add } from "./calculator";

test("adds 1 + 2 to equal 3", () => {
  expect(add("1,2")).toBe(3);
});
test("adds empty string to equal 0", () => {
  expect(add("")).toBe(0);
});
test("adds 1 to equal 1", () => {
  expect(add("1")).toBe(1);
});
test("adds 1,2,3,4,5 to equal 15", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});
