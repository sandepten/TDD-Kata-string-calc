import { expect, test } from "vitest";
import { calculator } from "./calculator";

test("adds 1 + 2 to equal 3", () => {
  expect(calculator("1,2")).toBe(3);
});
test("adds empty string to equal 0", () => {
  expect(calculator("")).toBe(0);
});
test("adds 1 to equal 1", () => {
  expect(calculator("1")).toBe(1);
});
test("adds 1,2,3,4,5 to equal 15", () => {
  expect(calculator("1,2,3,4,5")).toBe(15);
});

// negative numbers
test("Calling add with a negative number will throw an exception: 'negative numbers not allowed <negative_number>'.", () => {
  expect(() => calculator("-1,2")).toThrow("negative numbers not allowed -1");
});
test("Calling add with multiple negative numbers will throw an exception: 'negative numbers not allowed <negative_number1>,<negative_number2>'", () => {
  expect(() => calculator("2,-4,3,-5")).toThrow(
    "negative numbers not allowed -4,-5",
  );
});

test("Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2", () => {
  expect(calculator("2,1001")).toBe(2);
});

// delimiter
test("Allow the add method to handle new lines between numbers (instead of commas). ('1\n2,3' should return 6)", () => {
  expect(calculator("1\n2,3")).toBe(6);
});
test("Support different delimiters:To change the delimiter, the beginning of the string will contain a separate line that looks like this: '//[delimiter]\\n[numbers…]'. For example, '//;\\n1;2' where the delimiter is ';' should return 3.", () => {
  expect(calculator("//;\n1;2")).toBe(3);
});
test("Delimiters can be of any length with the following format: “//[delimiter]\\n” for example: “//[***]\\n1***2***3” should return 6", () => {
  expect(calculator("//[***]\n1***2***3")).toBe(6);
});
test("Allow multiple delimiters like this: “//[delim1][delim2]\\n” for example “//[*][%]\\n1*2%3” should return 6.", () => {
  expect(calculator("//[*][%]\n1*2%3")).toBe(6);
});
test("Make sure you can also handle multiple delimiters with length longer than one char. For example: “//[***][%%%]\\n1***2%%%3” should return 6.", () => {
  expect(calculator("//[***][%%%]\n1***2%%%3")).toBe(6);
});
test("If the delimiter is % then multiply the number", () => {
  expect(calculator("//%\n1%2")).toBe(2);
});
