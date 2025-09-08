export function calculator(numbers: string): number {
  if (!numbers) return 0;

  const delimiterResult = delimiterNums(numbers);
  const numArray = delimiterResult.nums;

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`,
    );
  }
  const numArrayLessThan1000 = numArray.filter((num) => num <= 1000);

  return delimiterResult.shouldMultiply
    ? multiply(numArrayLessThan1000)
    : add(numArrayLessThan1000);
}

function delimiterNums(numbers: string): {
  nums: number[];
  shouldMultiply: boolean;
} {
  let shouldMultiply = false;
  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterEndIndex);
    if (delimiterSection.length === 1 && delimiterSection.startsWith("%")) {
      shouldMultiply = true;
    }
    if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
      delimiters = delimiters.concat(
        delimiterSection
          .slice(1, -1)
          .split("][")
          .map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
      );
    } else {
      delimiters.push(delimiterSection);
    }
    numbers = numbers.slice(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numbers.split(regex).map(Number);

  return { nums: numArray, shouldMultiply };
}

function add(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

function multiply(nums: number[]): number {
  return nums.reduce((a, b) => a * b, 1);
}
