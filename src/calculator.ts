export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    delimiters.push(customDelimiter);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numbers.split(regex).map((num) => parseInt(num, 10));

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`,
    );
  }
  const filteredNumbers = numArray.filter((num) => num <= 1000);

  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}
