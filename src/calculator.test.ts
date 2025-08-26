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

test("Allow the add method to handle new lines between numbers (instead of commas). ('1\n2,3' should return 6)", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Support different delimiters:To change the delimiter, the beginning of the string will contain a separate line that looks like this: '//[delimiter]\\n[numbers…]'. For example, '//;\\n1;2' where the delimiter is ';' should return 3.", () => {
  expect(add("//;\n1;2")).toBe(3);
});
